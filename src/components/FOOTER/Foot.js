import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../../index'
import { REVIEWS_ROUTE, QUESTIONS_ROUTE } from "../../utils/const"

const Foot = observer(() => {
  const {user} = useContext(Context)
  return (
    <FootBody>
        <FootElCont>
          <FootEl>
            <FootText><Link to={QUESTIONS_ROUTE} style = {{color:'white'}}>Частые вопросы</Link></FootText>
            <FootText><Link to={'https://t.me/MS_pomoshnik_bot'}>Задать другой вопрос</Link></FootText>
          </FootEl>
          <FootEl>
            <FootText>О нас</FootText>
            <FootText>Политика</FootText>
          </FootEl>
        </FootElCont>
        <FootElCont>
          <FootEl>
            <FootText><Link style = {{color:'white'}} to={'https://t.me/Money_Slide'}>Группа тг</Link></FootText>
            <FootText><Link style = {{color:'white'}} to={'https://t.me/MS_pomoshnik_bot'}>Сотрудничество</Link></FootText>
          </FootEl>
          <FootEl>
            <FootText><Link onClick={() => {
              user.setIsVisible(false)
              }} style = {{color:'white'}} to={REVIEWS_ROUTE}>Отзывы</Link></FootText>
            <FootText>Обзор на проект</FootText>
          </FootEl>
        </FootElCont>
    </FootBody>
  )
})

const FootBody = styled.div`
flex-wrap: wrap;
border-top: 1pt solid #f6a617;
    width: 1200px;
    height: 100%;
    display: flex;
    flex: 0 1 auto;
    justify-content: center;
    align-items: center;
    color:white;
`
const FootElCont = styled.div`
    min-height: 90%;
    display: flex;
    margin: 9px 10px 0 10px;
    flex: 1 1 20%;
    justify-content: space-around;
`
const FootEl = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    flex: 0 1 50%;
`
const FootText = styled.div`
    margin: 5px;
    display: flex;
    cursor:pointer;
		justify-content: center;
    text-align: center;
`
export default Foot