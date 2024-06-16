import React, { useEffect, useState } from 'react'
import { LiaGofore } from 'react-icons/lia';
import styled from 'styled-components';
import SwimMes from '../components/SwimMes';
import { httpGetBalUser, httpGetBanUser, httpPostUserBal, httpPostUserBan } from '../http/admin';

const  Admin = () => {
    const [ banId, setBanId ] = useState(0);
    const [debouncedValue, setDebouncedValue] = useState(banId);
    const [ banLogin, setBanLogin ] = useState('логин');
    const [ banEmail, setBanEmail ] = useState('мэйл');
    const [ banBalance, setBanBalance ] = useState('0');
    const [ banStatus, setBanStatus ] = useState(false);

    const [popups, setPopups] = useState([]);

    const [debouncedValue1, setDebouncedValue1] = useState(banId);
    const [ popolnId, setPopoknId ] = useState(0);
    const [ popolnBal, setPopolnBal ] = useState(0);
    const [ loginBal, setLoginBal ] = useState('логин');
    const [ plusBal, setPlusBal ] = useState(0);
    
    useEffect(() => {
        // Устанавливаем таймер
        const handler = setTimeout(() => {
          setDebouncedValue(banId);
        }, 2000);
    
        // Очищаем таймер при каждом изменении inputValue
        return () => {
          clearTimeout(handler);
        };
      }, [banId]);
    

      useEffect(() => {
        if (debouncedValue) {
          // Отправка запроса на сервер
          GetBanUs(debouncedValue);
        }
      }, [debouncedValue]);

      const GetBanUs = async (value) => {
        try {
            const data = await httpGetBanUser(value)
            setBanLogin(data.login)
            setBanEmail(data.email)
            setBanBalance(data.balance)
            setBanStatus(data.isBanned)
          } catch (error) {
            console.error('Error sending request:', error);
          }
      };
      useEffect(() => {
        // Устанавливаем таймер
        const handler = setTimeout(() => {
          setDebouncedValue1(popolnId);
        }, 2000);
    
        // Очищаем таймер при каждом изменении inputValue
        return () => {
          clearTimeout(handler);
        };
      }, [popolnId]);
    

      useEffect(() => {
        if (debouncedValue1) {
          // Отправка запроса на сервер
          GetBalUs(debouncedValue1);
        }
      }, [debouncedValue1]);

      const GetBalUs = async (value) => {
        try {
            const data = await httpGetBalUser(value)
            setLoginBal(data.login)
            setPopolnBal(data.balance)
          } catch (error) {
            console.error('Error sending request:', error);
          }
      };

      const PostBan = async () => {
        try {
            let data;
            const formData = new FormData()
            formData.append('id', banId)
            formData.append('isBanned', !banStatus)
            data = await httpPostUserBan(formData)
            if(data == 'Статус пользователя обновлен'){
                setBanStatus(!banStatus)
            }
            const newPopup = { id: Date.now(), data };
            setPopups(prevPopups => [...prevPopups, newPopup]);

            // Удаляем всплывающее окно через 5 секунд
            setTimeout(() => {
            setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
            }, 5000);
          } catch (error) {
            console.error('Error sending request:', error);
          }
      };
      const PostPopoln = async () => {
        try {
            let data;
            const formData = new FormData()
            formData.append('id', popolnId)
            formData.append('plusBal', plusBal)
            formData.append('polsBal', popolnBal)
            data = await httpPostUserBal(formData)
            if(data == 'Баланс пользователя обновлен'){
                setPopolnBal(parseInt(popolnBal) + parseInt(plusBal))
            }
            const newPopup = { id: Date.now(), data };
            setPopups(prevPopups => [...prevPopups, newPopup]);

            // Удаляем всплывающее окно через 5 секунд
            setTimeout(() => {
            setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
            }, 5000);
          } catch (error) {
            console.error('Error sending request:', error);
          }
      };

  return (
    <Wrapper>
        <Element>
            <label>
                Заблокировать
            </label>
            <EL>
                <label>
                    Логин пользователя:
                </label>
                <Data>
                {banLogin}
                </Data>
                <label>
                    Email пользователя:
                </label>
                <Data>
                {banEmail}
                </Data>
                <label>
                    Баланс пользователя:
                </label>
                <Data>
                {banBalance}
                </Data>
                <label>
                    Статус аккаунта:
                </label>
                <Data>
                {banStatus == true
                ?
                'Заблокирован'
                :
                'Разблокирован'
                }
                </Data>
            </EL>
            <EL>
                <Input placeholder='id' onChange={e => setBanId(e.target.value)} value={banId}/>
                <div><But onClick={PostBan}>{banStatus == true
                ?
                'Разблокировать'
                :
                'Заблокировать'
                }</But></div>
            </EL>
        </Element>


        <Element>
            <label>
                Пополнить баланс
            </label>
            <div>
                <EL>
                    <Input placeholder='id' onChange={e => setPopoknId(e.target.value)} value={popolnId}/>
                    <div>
                        Логин пользователя: <Data>{loginBal}</Data>
                    </div>
                    <div>
                        баланс пользователя сейчас: <Data>{popolnBal}</Data>
                    </div>
                </EL>
                <EL>
                    <Input placeholder='Сколько прибавить' onChange={e => setPlusBal(e.target.value)} value={plusBal}/>
                    <div>
                        баланс пользователя будет: <Data>{parseInt(popolnBal) + parseInt(plusBal)}</Data>
                    </div>
                </EL>
                <EL><But onClick={PostPopoln}>Подтвердить</But></EL>
            </div>
        </Element>
        {popups.map(popup => (
        <SwimMes key={popup.id} text={popup.data} />
      ))}
    </Wrapper>
  )
}
const Element = styled.div`
display: flex;
flex: 1 1 auto;
background-color: #2e3442;
padding: 10px;
border-radius: 10px;
width: 90%;
flex-direction: column;
`
const EL = styled.div`
margin: 10px 0;
`
const But = styled.button`
    margin-top: 20px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 0 1 auto;
    border-radius: 10px;
    background-color: #f6a617;
    border: none;
    color: white;
    cursor: pointer;
    transition-duration: .5s;
`
const Data = styled.div`
display: flex;
width: fit-content;
border-bottom: 1px solid #f6a617;
`
const Input = styled.input`
margin: 10px 0;
padding: 10px;
border-radius: 10px;
border: none;

    margin: 0;
    background-color: #262b37;
    min-height: 20px;
    padding: 10px;
    background: #262b37;
    color: white;
    border: unset;
    border-radius: 10px;
    outline: none;
    max-height: 40px;
    flex: 1 1 auto;
`
const Wrapper = styled.div`
    position: relative;
    margin-top: 75px;
    display: flex;
    flex: 1 1 auto;
    padding-top: 10px;
    width: 100%;
    max-width: 1200px;
    flex-wrap: wrap;
    min-height: calc(100vh - 197px);
    justify-content: center;
    align-items: center;
    border-top: 0.5px solid #2d3340;
    color: white;
    font-size: 16pt;
`
export default Admin; 
