import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../..'
import { httpPostJoin } from '../../http/rooms'
import { ROOMS_ROUTE } from '../../utils/const'
import SwimMes from '../SwimMes'

const WrapButtons = observer((props) => {
    const { user } = useContext(Context)
    const navigate  = useNavigate()
    const stylelist = {
        background: 'red',
        margin: '15px 10px',
        height: '100px',
        color: 'white',
        backgroundColor: '#f6a617',
        minHeight: '100px',
        maxHeight: '100px',
        margin: '20px 0',

        color: 'white',
        display: 'flex',
        minHeight: '50px',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flex: '1 1 auto',
        borderRadius: '10px',
        cursor: 'pointer',
        transitionDuration: '.5s',
    }
    
    const styleLink = {
        color: 'white',
        margin: '5px 0',
        padding: '5px',
        display: 'flex',
        minHeight: '50px',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flex: '1 1 auto',
        borderRadius: '10px',
        backgroundColor: '#f6a617',
        cursor: 'pointer',
        transitionDuration: '.5s',
    }
    const [popups, setPopups] = useState([]);
    const joinFunc = async () => {
        let data;
        const formData = new FormData()
        formData.append('id', user.User.id)
        formData.append('price', props.val)
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
    let newCost = props.val-(props.val*0.1)
  return (<WrapButtonst>
    {
        props.color ? 
        
        <Link className='WrapBut' to={props.go} style={stylelist}>
            {props.text}
        </Link>
        
        :
            (props.row == 1
                ?
                <Buttonst onClick={joinFunc} className='WrapBut'>
                    {props.text} &nbsp;
                    <b className= {
                        (user.isAuth & user.Lead > 0 & !(user.useLead))?
                        'cell'
                        :
                        ''
                    } >{` ${props.val}`}</b> &nbsp;{(user.isAuth & user.Lead > 0 & !(user.useLead))?newCost:''} 
                </Buttonst>
            :
                <Link className='WrapBut' to={props.go} style={styleLink}>
                    {props.text}
                </Link>
            )
        
    }
    {popups.map(popup => (
        <SwimMes key={popup.id} text={popup.data} />
      ))}
  </WrapButtonst>
        
        
  )
})
const WrapButtonst = styled.div`
    background-color: #00000000;
    transition-duration: .5s;
    padding: 0;
    flex-direction: row;
    width: 90%;
    position: relative;
    border-radius: 10px;
    display: flex;
`

const Buttonst = styled.div`
    flex-direction: row;
    width: 90%;
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

export default WrapButtons; 