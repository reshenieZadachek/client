import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { Context } from '..';
import WrapperCont2 from '../components/wrapper/WrapperCont2';
import { COMMON_ROUTE, OHTERS_ROUTE, SECURITY_ROUTE } from '../utils/const';
import WorkRow from '../components/settings/WorkRow';
import SetMenu from '../components/settings/SetMenu';
import { changeProfCommon, changeProfOther, changeProfSecurity } from '../http/userAPI';
import OtherEl from '../components/settings/OtherEl';
import SwimMes from '../components/SwimMes';

const  Settings = observer(() => {
  const [popups, setPopups] = useState([]);
  const location = useLocation()
  const {user} = useContext(Context)
  const isCommon = location.pathname === COMMON_ROUTE
  const isSecurity = location.pathname === SECURITY_ROUTE
  const isOthers = location.pathname === OHTERS_ROUTE
  const [login, setLogin] = useState(user.User.login)
  const [email, setEmail] = useState(user.User.email)
  const [refCode, setRefCode] = useState(user.User.code)
  const [name, setName] = useState(user.User.usname)
  const [surName, setSurName] = useState(user.User.ussurname)

  const commonClick = async () => {
    let data;
    let mes;
    const formData = new FormData()
    formData.append('id', user.User.id)
    formData.append('login', login)
    formData.append('email', email)
    formData.append('name', name)
    formData.append('surname', surName)
    formData.append('refCode', refCode)
    data = await changeProfCommon(formData)
    if(data[0]){
      user.setUser(data[1])
      mes = 'Изменения сохранены';
      const newPopup = { id: Date.now(), mes }
        setPopups(prevPopups => [...prevPopups, newPopup]);

        // Удаляем всплывающее окно через 5 секунд
        setTimeout(() => {
        setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
        }, 5000);
    }
    else{
      mes = data[1].response.data.message
      const newPopup = { id: Date.now(), mes }
        setPopups(prevPopups => [...prevPopups, newPopup]);

        // Удаляем всплывающее окно через 5 секунд
        setTimeout(() => {
        setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
        }, 5000);
    }
  }

  const [newPassword, setNewPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [nowPassword, setNowPassword] = useState('')

  const securityClick = async () => {
    let data;
    let mes;
    const formData = new FormData()
    formData.append('id', user.User.id)
    formData.append('password', newPassword)
    formData.append('nowPassword', nowPassword)
    data = await changeProfSecurity(formData)
    if(data[0]){
      user.setUser(data[1])
      mes = 'Изменения сохранены';
      const newPopup = { id: Date.now(), mes }
        setPopups(prevPopups => [...prevPopups, newPopup]);

        // Удаляем всплывающее окно через 5 секунд
        setTimeout(() => {
        setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
        }, 5000);
    }
    else{
      mes = data[1].response.data.message
      const newPopup = { id: Date.now(), mes }
        setPopups(prevPopups => [...prevPopups, newPopup]);

        // Удаляем всплывающее окно через 5 секунд
        setTimeout(() => {
        setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
        }, 5000);
    }
    
  }

  const [checkLogin,setCheckLogin] = useState(user.User.confLogin)
  const [checkPhoto,setCheckPhoto] = useState(user.User.confPhoto)
  const [checkStat,setCheckStat] = useState(user.User.confStat)
    const checkSlideLogin = (e) =>{
      setCheckLogin((currentValue) => !currentValue)
      
    }
    const checkSlidePhoto = (e) =>{
      setCheckPhoto((currentValue) => !currentValue)
    }
    const checkSlideStat = (e) =>{
      setCheckStat((currentValue) => !currentValue)
    }
    
    let heightLogin = 0
    let widthLogin = 0
    
    let heightPhoto = 0
    let widthPhoto = 0

    let heightStat = 0
    let widthStat = 0
    


    if (user.User.confLogin){
      heightLogin = 30
      widthLogin = 30
    }
    else{
      heightLogin = 0 
      widthLogin = 0
    }
    if (user.User.confPhoto){
      heightPhoto = 30
      widthPhoto = 30
    }
    else{
      heightPhoto = 0 
      widthPhoto = 0
    }
    if (user.User.confStat){
      heightStat = 30
      widthStat = 30
    }
    else{
      heightStat = 0 
      widthStat = 0
    }

    const otherClick = async () => {
      const formData = new FormData()
      formData.append('id', user.User.id)
      formData.append('confLogin', checkLogin)
      formData.append('confPhoto', checkPhoto)
      formData.append('confStat', checkStat)
      let data = await changeProfOther(formData)
    }
  return (
    <Wrapperr>
      {popups.map(popup => (
        <SwimMes key={popup.id} text={popup.mes} />
      ))}
      <ContentBody>
        <WrapSet>
              <RowItem1 className='style_col'>
                <SetMenu />
                <WorkZone className='profWind'>
                  {
                    isCommon && 
                  <ContWork>
                    <WorkRow func = {e => setLogin(e.target.value)} val = {login} labelValue={'Логин'} inputPlaceholder={'Введите новый логин'} />
                    <WorkRow func = {e => setEmail(e.target.value)} val = {email}  labelValue={'Почта'} inputPlaceholder={'Введите почту'} />
                    <WorkRow 
                      func = {e => setName(e.target.value)} val = {name}
                      func1 = {e => setSurName(e.target.value)} val1 = {surName} 
                      doubleRow={true} 
                      labelValue={'Имя'} inputPlaceholder={'Введите имя'} 
                      labelValue1={'Фамилия'} inputPlaceholder1={'Введите фамилию'}
                     />
                    <WorkRow func = {e => setRefCode(e.target.value)}  labelValue={'Ваш пригласительный код'} val={refCode} />
                    <SetBut onClick={commonClick} className='SetBut'>Сохранить данные</SetBut>
                  </ContWork>
                  }
                  {
                    isSecurity &&
                  <ContWork style={{justifyContent:'flex-start'}}>
                    <WorkRow labelValue={'Текущий пароль'} inputPlaceholder={'Текущий пароль'} val ={nowPassword} func = {e => setNowPassword(e.target.value)} />
                    <WorkRow 
                      doubleRow={true} 
                      labelValue={'Новый пароль'} inputPlaceholder={'Новый пароль'} val={newPassword} func={e => setNewPassword(e.target.value)}
                      labelValue1={'Подтверждение нового пароля'} inputPlaceholder1={'Подтверждение нового пароля'} val1={confPassword} func1={e => setConfPassword(e.target.value)}
                    />
                    <SetBut 
                    onClick={securityClick} className='SetBut'
                    disabled={
                      (newPassword !== confPassword) || (nowPassword.length<4) || (newPassword.length<4)
                      ? 
                      true
                      : 
                      false
                      }
                    >{
                      nowPassword.length>4 & newPassword.length>4
                    ?
                    (newPassword === confPassword 
                      ? 
                      'Сохранить данные' 
                      : 
                      'Пароли не совпадают')
                    :
                    'Длинна пароля должна быть больше 4 символов'}</SetBut>
                  </ContWork>
                  }
                  {
                    /*isOthers &&
                  <ContWork style={{justifyContent:'flex-start'}}>
                    <OtherEl heightmy={heightLogin} widthmy={widthLogin} func={checkSlideLogin} text={'Скрыть логин'} />
                    <OtherEl heightmy={heightPhoto} widthmy={widthPhoto} func={checkSlidePhoto} text={'Скрыть фотографию'} />
                    <OtherEl heightmy={heightStat} widthmy={widthStat} func={checkSlideStat} text={'Скрыть статистику'} />
                    <SetBut onClick={otherClick} className='SetBut'>Сохранить данные</SetBut>
                  </ContWork>*/
                  }
                  
                </WorkZone>
              </RowItem1>    
        </WrapSet>
        <WrapperCont2 mystyle={{flex: '0 1 auto'}}/>
      </ContentBody>
    </Wrapperr>
  )
})

const ContWork = styled.div`
    font-family: Georgia, serif;
    padding: 0;
    width: auto;
    flex: 1 1 auto;
    justify-content: space-around;
    background-color: #0f0f1000;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 10px;
`

const Wrapperr = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  padding-top:10px;
  width:100%;
  min-height: calc(100vh - 197px);
  justify-content: center;
  border-top: 0.5px solid #2d3340;
`
const ContentBody = styled.div`
  display:flex;
  flex-direction: column;
  max-width: 1200px;
  flex: 1 1 auto;
`
const WrapSet = styled.div`
    position: relative;
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    min-height: 100px;
    justify-content: center;
    border-radius: 10px;
    color: white;
`

const RowItem1 = styled.div`
    margin-right: 5px;
    flex: 1 1 auto;
    padding: 10px;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    border-radius: 10px;
`

const WorkZone = styled.div`
  flex: 1 1 80%;
  justify-content: space-around;
  background-color: #2e3442;
  margin: 0px;
  border-radius: 0px;
  padding: 10px;
    display: flex;
    height: 100%;
`


const SetBut = styled.button`
    font-family: Georgia, serif;
    font-size: 13pt;
    border-radius: 10px;
    color: white;
    min-height: 40px;
    border: 1px solid #f6a617;
    background: none;
    margin: 0 20px;
    cursor: pointer;
    transition: all 0.7s;
    margin-top:10px;
`

export default Settings; 
