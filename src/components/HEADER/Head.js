import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../../index'
import { COMMON_ROUTE, GAME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, TGBOT_ROUTE } from '../../utils/const'
import { LiaTelegramPlane } from "react-icons/lia";
import { BiLogoVk } from "react-icons/bi";
import { LiaWhatsapp } from "react-icons/lia";
import { PiUserLight } from "react-icons/pi";
import $ from 'jquery';
import SubEl from './SubEl'
import { IoSettingsOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { check } from '../../http/userAPI'
import { BsPersonFillUp } from "react-icons/bs";
import { BsPersonFillDown } from "react-icons/bs";


const Head = observer(() => {
    const navigate  = useNavigate()
    const {user} = useContext(Context)
    
    const stylelist = {
        background:'#f6a617',
        borderRadius: '10px',
        padding: '7px',
    }
    const Linkst = {
        textDecoration: 'none',
        color:'white',
    }
    const Linkst2 = {
    backgroundColor: '#f6a617',
    }
    const Linkst3 = {
        border: '0.5px solid #2d3340',
    }
    
    const logOut = () => {
        navigate(GAME_ROUTE)
        user.setUser({})
        localStorage.setItem('token','')
        user.setIsAuth(false)
        user.setIsVisible(false)
        check()
    }
        if (user.isVisible) {
            $(".triangle").css({
                "display":"flex",
            });
            $(".sub_nav").css({
                "display":"flex",
            });
        }
        else{
            $(".triangle").css({
                "display":"none",
            });
            $(".sub_nav").css({
                "display":"none",
            });
        }
    const BGBalance ={
        backgroundImage: `url(${process.env.REACT_APP_API_URL}balance.svg)`,
    }
  return (
    <Headst>
        <HeadEl1>
            <Link onClick={() =>user.setIsVisible(false)} style={Linkst} to={GAME_ROUTE}>
                <span className='mobile_none' style={stylelist}>
                    Money
                </span>
                <div class="logo_text pc_none" style={stylelist}>
				    MS
			    </div>
                <span className='mobile_none'>
                    Slide
                </span>
            </Link>
        </HeadEl1>
        <HeadEl2>
            <HeadEl2El1 className='mobile_none'>
                <Socials>
                    <Share>
                        Поделиться
                    </Share>
                    <SocialIcon>
                        <a className = "socials_cont" href="https://vk.com/share.php?url=https://MoneySlide.ru" target="_blank" rel="noopener">
                        <BiLogoVk  style={{color:'white',fontSize:'18pt'}} />
							</a>
							<a className = "socials_cont" href="https://api.whatsapp.com/send?text=Привет уже видел новый сервис для заработка MoneySlide? https://ms.ru" target="_blank" rel="noopener">
                            <LiaWhatsapp style={{color:'white',fontSize:'18pt'}} />
							</a>
							<a href="https://t.me/share/url?text=https://MoneySlide.ru&url=Привет уже видел новый сервис для заработка MoneySlide?" target="_blank" rel="noopener" className = "socials_cont">
                            <LiaTelegramPlane style={{color:'white',fontSize:'18pt'}} />
							</a>
                    </SocialIcon>
                </Socials>
            </HeadEl2El1>
            {
                user.isAuth
                ?
                    <HeadEl2El2>
                        <El2El1>
                            <BalanceCont>
                                <BalanceName>
                                    БАЛАНС
                                </BalanceName>
                                <BalanceValue>
                                    <BalanceValueEl>
                                        {user.User.balance}
                                        <BalansImg style={BGBalance}>

                                        </BalansImg>
                                    </BalanceValueEl>
                                </BalanceValue>
                            </BalanceCont>
                            <Deposit href={TGBOT_ROUTE} className='headBut1' id='deposit'>
                                Пополнить
                            </Deposit>
                            
                            <UnDeposit href={TGBOT_ROUTE} className='headBut2 mobile_none'>
                                Вывести
                            </UnDeposit>
                        </El2El1>


                        <El2El2>
                            <ProfLogo className = "socials_cont" onClick={() => 
                            {
                                const startvis = user.isVisible
                                user.setIsVisible(!startvis)
                                }}>
                                <PiUserLight  style={{width:'80%',height:'80%'}}/>
                            </ProfLogo>
                            <Triangle className='triangle'>

                            </Triangle>
                            <SubHeadCont className='sub_nav'>
                                <SubHead>
                                    <SubEl func = {() => {
                                        const startvis = user.isVisible
                                        user.setIsVisible(!startvis)
                                        }} 
                                        go = {PROFILE_ROUTE+'/'+user.User.id} usProf={true}/>
                                    <SubEl func = {() => {
                                        const startvis = user.isVisible
                                        user.setIsVisible(!startvis)
                                        }} go = {COMMON_ROUTE} usProf={false} text = {'Настройки'} icon = {<IoSettingsOutline style={{width:25,height:25}} />} />
                                    <SubEl usProf={false} text = {'История Операций'} icon = {<FaClock style={{width:25,height:25}} />} />
                                    <Link id='income' to={TGBOT_ROUTE} className='SubHeadEl'>
                                        <SubEll>
                                            <BsPersonFillDown style={{width:25,height:25}} />
                                        </SubEll>
                                        <SubEll>
                                            Пополнить
                                        </SubEll>
                                    </Link>
                                    <Link to={TGBOT_ROUTE} className='SubHeadEl sub_nav_el_text pc_none'>
                                        <SubEll>
                                            <BsPersonFillUp style={{width:25,height:25}} />
                                        </SubEll>
                                        <SubEll>
                                            Вывести
                                        </SubEll>
                                    </Link>
                                    <SubEl usProf={false} text = {'Выход'} icon = {<IoExitOutline style={{width:25,height:25}} />}  func = {logOut} />
                                </SubHead>
                            </SubHeadCont>
                        </El2El2>


                    </HeadEl2El2>
                :
                    <HeadEl2El2>
                        <Link className='linkHead linkHead1' to={REGISTRATION_ROUTE} style={Linkst2}>
                            Зарегистироваться
                        </Link>
                        
                        <Link className='linkHead linkHead2' to={LOGIN_ROUTE} style={Linkst3}>
                            Войти
                        </Link>
                    </HeadEl2El2>
            }
        </HeadEl2>
    </Headst>
  )
})
const SubEll = styled.div`
    display: flex;
    flex: 0 1 auto;
    margin: 0 5px;
    font-weight: 300;
`
const ProfImg = styled.div`
    width: 50px;
    height: 50px;
    font-weight: 300;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`
const Headst = styled.div`
display: flex;
flex: 0 1 1200px;
height: 75px;
-webkit-height: 75px;
justify-content: space-between;
`
const HeadEl1 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex: 0 0 18%;
    align-items: center;
    font-size: 16pt;
`
const HeadEl2 = styled.div`
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    align-items: center;
    color:white;
    padding: 10px;
`

const HeadEl2El1 = styled.div`
    justify-content: flex-start;
    display: flex;
    flex: 1 1 auto;
`
const HeadEl2El2 = styled.div`
    display: flex;
    flex: 1 1 auto;
    justify-content: space-around;
`
const El2El1 = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    justify-content: space-around;
`
const BalanceCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 0 1 auto;
    align-items: center;
`
const BalanceName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 2px;
`
const BalanceValue = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const BalanceValueEl = styled.div`
    padding: 0 5px;
    border-radius: 10px;
    min-width: 60;
    font-size: 15pt;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 2px;
`
const Deposit = styled.a`
    margin: 5px 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 0 1 auto;
    border-radius: 10px;
    background-color: #f6a617;
    cursor: pointer;
    transition-duration: .5s;
`
const UnDeposit = styled.a`
    margin: 5px 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 0 1 auto;
    border-radius: 10px;
    cursor: pointer;
    border: 0.5px solid #2d3340;
    transition-duration: .5s;
`
const El2El2 = styled.div`
    display: flex;
    flex: 0 1 auto;
    align-items: center;
`
const ProfLogo = styled.div`
    border-radius: 100px;
    border: 1px solid #f6a617;
    display: flex;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition-duration: .5s;
`
const Triangle = styled.i`
    display: none;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #697386;
    position: absolute;
    margin-top: 75px;
    margin-left: 15px;
    z-index: 25;
`
const SubHeadCont = styled.div`
    position: absolute;
    margin-top: 385px;
    margin-left: -200px;
    display: none;
    flex-direction: column-reverse;
    border-top: 15px solid transparent;
    padding: 0;
    z-index: 25;
`
const SubHead = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    min-width: 150px;
    max-width: 250px;
    min-height: 50px;
    background-color: #697386;
    box-shadow: 6px 7px 9px #5f5f5fd6;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`
const Share = styled.div`
    display: flex;
    flex: 1 2 auto;
    justify-content: space-around;
`
const SocialIcon = styled.div`
    margin-left: 10px;
    display: flex;
    flex: 1 2 auto;
`

const Socials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const BalansImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
margin: 0 2px;
height: 10px;
width: 10px;
padding: 10px;
`
export default Head