import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import ReviewsText from '../components/reviews/ReviewsText';
import { useNavigate } from 'react-router-dom'
import { httpGetRewiews, httpPostRewiew } from '../http/rewiews'
import { Context } from '..';
import Pages from '../components/reviews/Pages';
import { observer } from 'mobx-react-lite';
import { REGISTRATION_ROUTE } from '../utils/const';
import SwimMes from '../components/SwimMes';


const  Reviews = observer(() => {
  const [popups, setPopups] = useState([]);
  let ws;
  useEffect(() => {
    ws = new WebSocket('ws://localhost:5000');

    ws.onopen = function () {
      
    };

    ws.onmessage = function (event) {
      httpGetRewiews(rewiews.page, rewiews.limit).then(data => {
        rewiews.setRewiews(data.rows)
        rewiews.setTotalCount(data.count)
      })
    };
    return () => {
      ws.close();
    };
  }, []);
  const [textForm,setTextForm] = useState('')
  const {user} = useContext(Context)
  const {rewiews} = useContext(Context)
  const navigate  = useNavigate()

    useEffect(() => {
      httpGetRewiews(rewiews.page, rewiews.limit).then(data => {
        rewiews.setRewiews(data.rows)
        rewiews.setTotalCount(data.count)
      }) 
  }, [rewiews.page])

  const postRewiew = async () => {
    let mes;
    let data;
    const formData = new FormData()
    formData.append('id', user.User.id)
    formData.append('login', user.User.login)
    formData.append('text', textForm)
    formData.append('avatar', user.User.avatar)
    formData.append('page', rewiews.page)
    data = await httpPostRewiew(formData)
    setTextForm('')
    ws = new WebSocket('ws://localhost:5000');
    ws.onopen = function () {
      ws.send(JSON.stringify({ text: 'Я ТУТААА' }));
    };
    ws.onmessage = function (event) {
      httpGetRewiews(rewiews.page, rewiews.limit).then(data => {
        rewiews.setRewiews(data.rows)
        rewiews.setTotalCount(data.count)
      })
    };
    if(data === 'Вы уже добавили отзыв'){
      mes = data
      const newPopup = { id: Date.now(), mes }
        setPopups(prevPopups => [...prevPopups, newPopup]);

        // Удаляем всплывающее окно через 5 секунд
        setTimeout(() => {
        setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
        }, 5000);
        return(0)
    }
    
    httpGetRewiews(rewiews.page, rewiews.limit).then(data => {
      rewiews.setRewiews(data.rows)
      rewiews.setTotalCount(data.count)
    })
    mes = 'Ваш отзыв был сохранен'
      const newPopup = { id: Date.now(), mes }
        setPopups(prevPopups => [...prevPopups, newPopup]);

        // Удаляем всплывающее окно через 5 секунд
        setTimeout(() => {
        setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
        }, 5000);
        return(0)
}
const goReg = () => {
  navigate(REGISTRATION_ROUTE)
}
  return ( 
    <Wrapperr>
      {popups.map(popup => (
        <SwimMes key={popup.id} text={popup.mes} />
      ))}
      <ContentBody>
        <WrapSet>
              <RowItem1>
                <div style={{alignSelf:'center'}}>Отзывы</div>
                    <RewCont>
                    {rewiews.rewiews.map(rewiews =>
                    <Rew>
                      <ReviewsText key={rewiews.id} rewiews={rewiews}/>
                    </Rew>
                    )} 
                    </RewCont>
                    <Pages/>
                    <SendRew>
                        <ContRew>
                        <RewInput 
                          placeholder='Введите текст отзыва(10 - 200 символов)'
                          value={textForm}
                          onChange={e => setTextForm(e.target.value)}
                        />
                      <RewBut
                      className='SetBut'
                      onClick={user.isAuth ? postRewiew : goReg}>
                        {user.isAuth ? 'Отправить отзыв' : 'Зарегистрируйтесь чтобы оставить отзыв'}
                      </RewBut>
                        </ContRew>
                    </SendRew>
                </RowItem1>    
        </WrapSet>
        
      </ContentBody>
    </Wrapperr>
  )
})

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
  padding: 0 10px 10px 10px;
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
    flex-direction: column;
    flex: 1 1 auto;
    padding: 10px;
    justify-content: flex-start;
    display: flex;
    border-radius: 10px;
    background-color: #262b37;
`
const Rew = styled.div`
    flex: 0 1 auto;
    display: flex;
    border-bottom: 1px solid #414551;
`
const RewCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 1200px;
`
const SendRew = styled.div`
    padding: 5px 10px 10px 10px;
    display: flex;
    position: relative;
    width:100%;
    justify-content:center;
`
const ContRew = styled.div`
    display: flex;
    flex: 1 1 auto;
    max-width: 400px;
    flex-wrap: wrap;
    justify-content:center;
`
const RewInput = styled.input`
    background-color: #414551;
    margin: 10px 0;
    padding: 20px;
    color: white;
    border: unset;
    border-radius: 10px;
    width:100%;
    outline: none;
`
const RewBut = styled.button`
  width: 100%;
  padding: 10px;
  background: none;
  cursor: pointer;
  transition: all 0.7s;
  color:white;
  font-size: 12pt;
  border-radius: 10px;
  border: 1px solid #f6a617;
  cursor: pointer;
`

export default Reviews; 
