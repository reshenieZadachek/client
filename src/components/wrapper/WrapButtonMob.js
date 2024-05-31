import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../..'
import { httpPostJoin } from '../../http/rooms'
import { ROOMS_ROUTE } from '../../utils/const'
import SwimMes from '../SwimMes'

const WrapButtonsMob = observer((props) => {
    const { user } = useContext(Context)
    let newCost = props.val-(props.val*0.1)
  return (
  <WrapButtonst>
                <Buttonst onClick={user.isAuth ? props.joinFunc : props.PassF} className='WrapBut'>
                    {props.text} &nbsp;
                    <b className= {
                        (user.isAuth & user.Lead > 0 & !(user.useLead))?
                        'cell'
                        :
                        ''
                    } >{` ${props.val}`}</b> &nbsp;{(user.isAuth & user.Lead > 0 & !(user.useLead))?newCost:''} 
                </Buttonst>
  </WrapButtonst>   
  )
})
const WrapButtonst = styled.div`
    display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	background: #20242d;
	align-items: center;
`

const Buttonst = styled.div`
    flex-direction: row;
    width: 80%;
    position: relative;
    margin: 5px 0;
    display: flex;
    min-height: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1 1 auto;
    border-radius: 10px;
    background-color: #f6a617;
    cursor: pointer;
    transition-duration: .5s;
    font-size: 11pt;
    color: white;
`

export default WrapButtonsMob; 
