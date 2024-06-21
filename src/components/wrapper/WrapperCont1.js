import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Context } from '../..'
import { httpGetDiscount } from '../../http/game'
import { MARKETING_ROUTE,ROOMS_ROUTE, TGCHAN_ROUTE } from '../../utils/const'
import WrapButtons from './WrapButton'
import ProgressBar from './ProgressBar';
import MenuMobile from './menuMobile'
import { useNavigate } from 'react-router-dom'
import SwimMes from '../SwimMes'
import { httpEnd0, httpPostJoin } from '../../http/rooms'

const  WrapperCont1 = observer(() => {
    const [popups, setPopups] = useState([]);
    const navigate  = useNavigate()
    const joinFunc = async (e) => {
        let data;
        const formData = new FormData()
        formData.append('id', user.User.id)
        formData.append('price', e.target.closest('.WrapBut').querySelector('b').textContent.trim())
        data = await httpPostJoin(formData)
        if (data.mes == 'Вы успешно вошли в комнату') {
            user.User.roomlvl = data.roomlvl
            user.User.balance = data.balance
            user.User.room = data.room
            user.User.price = data.price
            user.useLeader = data.useLeader
            navigate(ROOMS_ROUTE)
        }
        
        const newPopup = { id: Date.now(), data };
        setPopups(prevPopups => [...prevPopups, newPopup]);

        // Удаляем всплывающее окно через 5 секунд
        setTimeout(() => {
        setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
        }, 5000);
    }
    const PassF = () => {
        const data = ['Вы не вошли в аккаунт'];
        const newPopup = { id: Date.now(), data};
        setPopups(prevPopups => [...prevPopups, newPopup]);

        // Удаляем всплывающее окно через 5 секунд
        setTimeout(() => {
        setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
        }, 5000);
    }


    const [show,setShow] = useState(0)
    const { user } = useContext(Context)
    let tessttt = 0
    function pass(){
        
    }
    
    useEffect(() => {
        user.isAuth
        ?
        (httpGetDiscount(user.User.id).then(data => {
          user.setLead(data.listUs.user.leader)
          user.setUseLead(data.listUs.user.useLeader)
          user.setProgress(data.listUs.progress)
        }))
        :
        pass();
    }, [])
    let mobst = {display: 'none'};

    const disp = {
        display: 'flex',
    }
    const BGBalance ={
        backgroundImage: `url(${process.env.REACT_APP_API_URL}balance.svg)`,
    }
    const [end, setEnd] = useState(user.User.end)
    const end0 = async(e) => {
        const formData = new FormData()
        formData.append('id', user.User.id)
        const data = await httpEnd0(formData)
        setEnd(0)
    }
    return (
    <WrapperrCont>
                <RowItem1>
                    {
                        user.isAuth && 
                        <ContBar>
                            <ProgressBar level={user.progress} text={'В ГРУППУ'} />
                        </ContBar>
                    }
                    <TextWrap>
                    <h3 style={{display:'contents',fontSize:'13pt',}}>MoneySlide</h3> - это сайт, который  научит вас такими навыками, как Маркетинг, Процентное накопления, обучит вас финансовой грамотности и все это в игровой форме.<br/>
                    </TextWrap>
                    <br/>
                    <div>
                    
                    </div>
                    <TextWrap>
                    По завершению любого из обучений, вы будете получать слайды (внутриигровую валюту), которую потом вы сможете потратить на товары, донат в игры, ценные бумаги, или реальные деньги  в нашем магазине.<br/>
                    </TextWrap>
                    <br/>
                    <TextWrap>
                    Всю информацию и нужного бота  вы можете найти: <br/> <a href="https://t.me/perehodnik_ms" style={{color:'#f6a617'}}>здесь</a>
                    </TextWrap>
                </RowItem1>    
                <RowItem2 className='mobile_none'>
                    <RowItem2El1>
                        <WrapButtons row = {1} text='Обучение за ' val={1000} />
                        <WrapButtons row = {1} text='Обучение за '  val={2500} />
                        <WrapButtons row = {1} text='Обучение за '  val={5000} />
                        <WrapButtons row = {1} text='Обучение за '  val={10000} />
                    </RowItem2El1>
                    <RowItem2El2>
                        <WrapButtons go={MARKETING_ROUTE} row = {2} text='Обучение маркетингу' color='yellow' />
                        <WrapButtons go={TGCHAN_ROUTE} row = {2} text='Наши контакты' />
                        {/*<WrapButtons go={'https://qiwi.com/n/CEDIS371'} row = {2} text='Поддержать проект' />*/}
                    </RowItem2El2>
                </RowItem2>
                
                <SwimBut onClick={() => 
                            {
                                setShow(!show)
                                }}>
	                Обучения
                </SwimBut>
                <MenuMobile PassF={PassF} joinFunc={joinFunc} showModal={show} />

                {popups.map(popup => (
        <SwimMes key={popup.id} text={popup.data} />
      ))}
                
             <EndModalContainer style={end === 1 ? disp : {}}>
                <EndModal>
                    <ModalTextCont><ModalText>За прохождение обучения вы получили</ModalText><ModalContSum><ModalSum>10000</ModalSum><BalansImg style={BGBalance}></BalansImg></ModalContSum></ModalTextCont>
                    <ModalButton onClick={end0}>Ок</ModalButton>
                </EndModal>
            </EndModalContainer>   
            </WrapperrCont>
  )
})
const ModalButton = styled.button`
    padding: 10px 30px;
    margin-top: 20px;
    display: flex;
    flex: 1 1 auto;
    background: #f6a617;
    width: 80%;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 14pt;
`
const ModalText = styled.div`
    font-size: 16pt;
`
const ModalContSum = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalSum = styled.div`
font-family: fantasy;
    font-size: 45pt;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const BalansImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
height: 20px;
width: 20px;
padding: 10px;
`
const ModalTextCont = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
font-size:25pt;
`
const WrapperrCont = styled.div`
    display: flex;
    flex: 1 1 auto;
    max-width: 1200px;
    justify-content: center;
    border-radius: 10px;
    color: white;
    @media screen and (max-width: 720px){
        margin: 0 10px;
    }
`

const SwimBut = styled.div`
    text-transform: uppercase;
		padding: 1px;
		right: 0px;
		font-size: 10pt;
		top: 40%;
		display: none;
		position: fixed;	
		width: 15px;
		writing-mode: vertical-lr; 
		text-orientation: upright; 
		background-color: #f6a617;
		user-select: none;
		border-radius: 5px 0 0 5px;
		z-index: 27;
        @media screen and (max-width:720px){
            display: flex;
        }
`
const RowItem1 = styled.div`
    margin-right: 5px;
    flex-direction: column;
    flex: 1 1 70%;
    padding: 10px;
    display: flex;
    border-radius: 10px;
    background-color: #262b37;
`

const RowItem2 = styled.div`
    margin-left: 5px;
    flex: 0 1 30%;
    flex-direction: column;
    padding: 10px;
    display: flex;
    border-radius: 10px;
    background-color: #262b37;
`

const TextWrap = styled.div`
    display: flex;
    width: 100%;
    line-height: 28px; /* Уменьшение высоты строки для мобильных устройств */
    font-size: 12pt; /* Уменьшение размера шрифта для мобильных устройств */
`
const RowItem2El1 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    
`
const RowItem2El2 = styled.div`
    flex: 1 1 auto;
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    align-items: center;
`


const ContBar = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const EndModalContainer = styled.div`
display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    justify-content: center;
	align-items: center;
    background-color: #000000a6;
	z-index: 30;
	transition-duration: .5s;
`
const EndModal = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
	max-width: 900px;
	background: #20242d;
	position: relative;
	padding: 20px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`
export default WrapperCont1; 
