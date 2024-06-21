import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { Context } from '../..';
import { FaPencil } from "react-icons/fa6";
import { changeProfImg } from '../../http/userAPI';
import { COMMON_ROUTE, OHTERS_ROUTE, SECURITY_ROUTE } from '../../utils/const';
import SwimMes from '../SwimMes';

 const SetMenu = observer((props) => {
  const [popups, setPopups] = useState([]);
    const location = useLocation()
    const {user} = useContext(Context)
    const isCommon = location.pathname === COMMON_ROUTE
    const isSecurity = location.pathname === SECURITY_ROUTE
    const isOthers = location.pathname === OHTERS_ROUTE

    const path = process.env.REACT_APP_S3_IMG_URL + user.User.avatar
    const [image, setImage] = useState(path)
    const [checkImage, setCheckImage] = useState(false)
    const [file,setFile] = useState('')
    const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        setFile(event.target.files[0])
        setImage(URL.createObjectURL(event.target.files[0]));
        setCheckImage(true)
    }
    }
    const removeImg = (event) => {
        setImage(path)
        setCheckImage(false)
        }
    const click = async () =>{
        let data;
        let mes;
        const formData = new FormData()
        formData.append('id', user.User.id)
        formData.append('login', user.User.login)
        formData.append('file', file)
        data = await changeProfImg(formData)
        user.setUser(data)
        setCheckImage(false)
        mes = 'Фото обновлено'
        const newPopup = { id: Date.now(), mes }
        setPopups(prevPopups => [...prevPopups, newPopup]);
        // Удаляем всплывающее окно через 5 секунд
        setTimeout(() => {
        setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
        }, 5000);
    }
    const linkSt = {
        cursor:'auto',
      }
      
      const linkSelect = {
        backgroundColor: '#2e3442',
      }
  return (
    <Menu className='profWind'>
      {popups.map(popup => (
        <SwimMes key={popup.id} text={popup.mes} />
      ))}
    <ContPfoto>
      <ProfImg>
        <PhotoBox>
          <Photo className='imgHov' style={{backgroundImage: `url(${image})`}}>

          </Photo>
          {
            checkImage?
            <div className='wrapImgBlock'>
              <div onClick={click} style={{background: '#02CC02',}} className='sucANDrem'>
                +
              </div>
              <div onClick={removeImg} style={{background: '#ff0202',}} className='sucANDrem'>
                X
              </div>
            </div>
            :
            ''
          }
          <div className='wrapImg imgHov'>
            <input id="fileInput" style={{display:'none'}} type="file" onChange={onImageChange} />
            <label className='inpLogo' htmlFor="fileInput"><FaPencil style={{width:30,height:30}} /></label>
          </div>
        </PhotoBox>
        {user.User.login}
        
      </ProfImg>
    </ContPfoto>
    <ContMenu>
      <div className='setLink' style={linkSt}>Настройки</div>
      <Link className='setLink setLinkHov' style={ isCommon ? linkSelect:  {}} to={!isCommon && COMMON_ROUTE}>Общее</Link>
      <Link className='setLink setLinkHov' style={isSecurity ? linkSelect: {}} to={!isSecurity && SECURITY_ROUTE}>Безопасность</Link>
      {/*<Link className='setLink setLinkHov' style={isOthers ? linkSelect: {}} to={!isOthers && OHTERS_ROUTE}>конфидециальность</Link>*/}
    </ContMenu>
  </Menu>
  )
})

const Menu = styled.div`
  flex: 1 1 20%;
  padding: 20px 0;
  margin: 0px;
  border-radius: 0px;
  padding: 10px 0;
    display: flex;
    height: 100%;
    background-color: #262b37;
    flex-direction: column;
`
const ContPfoto = styled.div`
  padding: 0 0 20px 0;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #2d3340;
  margin: auto;
  display: flex;
  min-width: 200px;
  min-height: 100px;
  flex-direction: column;
`
const ContMenu = styled.div`
    flex: 1 1 70%;
    width: 100%;
    justify-content: center;
    margin: auto;
    display: flex;
    min-width: 200px;
    min-height: 100px;
    flex-direction: column;
`
const ProfImg = styled.div`
    position: relative;
    text-align: center;
`
const PhotoBox = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    position: relative;
    width: auto;
    background-color: unset;
`
const Photo = styled.div`
    background-size: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s ease;
    height: 100px;
    width: 100px;
    border-radius: 10px;
`

export default SetMenu