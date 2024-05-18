import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import Firstlvl from './Firstlvl'
import Secondlvl from './Secondlvl'
import { Context } from '../..'
import { httpGetMyRooms } from '../../http/rooms'
import Thirdlvl from './Thirdlvl'

const  ViewRoom = observer(() => {
    const { user } = useContext(Context)
    const { room } = useContext(Context) 
    let mas1 = room.MyRoom.firLvl
    const extendedArray1 = [...mas1];
    while (extendedArray1.length < 16) {
        extendedArray1.push({});
    }
    let mas2 = room.MyRoom.seclvl
    const extendedArray2 = [...mas2];
    while (extendedArray2.length < 16) {
        extendedArray2.push({});
    }
    let mas3 = room.MyRoom.thirlvl
    const extendedArray3 = [...mas3];
    while (extendedArray3.length < 1) {
        extendedArray3.push({});
    }
  return (
        <StatRowst>
            <Swim1>Обучение за {room.MyRoom.price}</Swim1>
            <Swim2>заполнена на {(room.MyRoom.firLvl).length}/16</Swim2>
            <Col>
                <MinCol>
                    <Firstlvl stolb={2} extendedArray = {extendedArray1.slice(0,4)}/>
                </MinCol>
                <MinCol>
                    <Firstlvl stolb={2} extendedArray = {extendedArray1.slice(4,8)}/>
                </MinCol>
            </Col>             
            <Secondlvl className='WrapColElem' extendedArray = {extendedArray2.slice(0,2)} />
            <Thirdlvl className='WrapColElem' extendedArray = {extendedArray3.slice(0,1)} />
            <Secondlvl className='WrapColElem' extendedArray = {extendedArray2.slice(2,4)} />
            <Col>
                <MinCol>
                    <Firstlvl stolb={2} extendedArray = {extendedArray1.slice(8,12)}/>
                </MinCol>
                <MinCol>
                    <Firstlvl stolb={2} extendedArray = {extendedArray1.slice(12,16)}/>
                </MinCol>
            </Col>
        </StatRowst> 
  )
})
const StatRowst = styled.div`
display: flex;
padding: 5px;
justify-content: space-around;
align-items: center;
flex: 1 1 auto;
max-width: 1200px;
`
const El = styled.div`
    display: flex;
    min-height: 50px;
    justify-content: center;
    align-items: center;
    flex: 1 1 50%;
`
const Col = styled.div`
display: flex;
flex-direction: column;
height: 90%;
justify-content: space-around;
align-items: center;
padding: 10px;
`
const MinCol = styled.div`
margin: 10px 0;
display: flex;
flex-direction: column;
flex: 1 1 auto;
justify-content: space-around;
`
const Swim1 = styled.div`
    position:absolute;
    left: 15px;
    top: 15px;
`
const Swim2 = styled.div`
    position:absolute;
    right: 15px;
    bottom: 15px;
`
export default ViewRoom; 
