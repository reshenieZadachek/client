import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../..'

export default function RoomButtons(props) {
    const { user } = useContext(Context)
    const styleLink = {
        backgroundColor: '#f6a617'
    }
  return (
    <WrapButtonst>
        <Link
        to={
            props.act
            ?
            props.to
            :
            ''
        }
        className={
            props.act
            ?
            'RoomBut activeBut'
            :
            'RoomBut'
        }
        style={
            props.act
            ?
            styleLink
            :
            {}
        }
        >
            {props.text}
        </Link>
    </WrapButtonst>
        
        
  )
}
const WrapButtonst = styled.div`
    transition-duration: .5s;
    padding: 0;
    width: 90%;
    position: relative;
    border-radius: 10px;
    display: flex;
`

const Buttonst = styled.div`
    flex-direction: row;
    width: 90%;
    position: relative;
    margin: 10px;
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