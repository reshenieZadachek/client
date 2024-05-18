import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { httpGetStat } from '../../http/game'
import StatRow from './Statrow'

import '../../App.css';
import '../../mobile.css';

const  WrapperCont2 = observer((props) => {
    const [stat10001lvl, setstat10001lvl] = useState(0)
    const [stat10002lvl, setstat10002lvl] = useState(0)
    const [stat10003lvl, setstat10003lvl] = useState(0)
    const [stat25001lvl, setstat25001lvl] = useState(0)
    const [stat25002lvl, setstat25002lvl] = useState(0)
    const [stat25003lvl, setstat25003lvl] = useState(0)
    const [stat50001lvl, setstat50001lvl] = useState(0)
    const [stat50002lvl, setstat50002lvl] = useState(0)
    const [stat50003lvl, setstat50003lvl] = useState(0)
    const [stat100001lvl, setstat100001lvl] = useState(0)
    const [stat100002lvl, setstat100002lvl] = useState(0)
    const [stat100003lvl, setstat100003lvl] = useState(0)
    useEffect(() => {
        httpGetStat().then(data => {
            if(data[0]){
                setstat10001lvl(data[0].room1lvl)
                setstat10002lvl(data[0].room2lvl)
                setstat10003lvl(data[0].room3lvl)
            }
            else{
                console.log('я в элзе');
            }
            
        })
      }, []);
  return (
    <WrapperCont className='WrapperCont_stat' style={props.mystyle}>
        <Cont className='stats_row_items'>
                    <RowItem className='RowItem_stat'>
                        <StatRow text='Комната на 1000' start ={true}/>
                        <StatRow text='1 уровень' val={stat10001lvl} />
                        <StatRow text='2 уровень' val={stat10002lvl} />
                        <StatRow text='3 уровень' val={stat10003lvl} />
                    </RowItem>   
                    <RowItem className='RowItem_stat'>
                        <StatRow text='Комната на 2500' start ={true} />
                        <StatRow text='1 уровень' val={stat25001lvl} />
                        <StatRow text='2 уровень' val={stat25002lvl} />
                        <StatRow text='3 уровень' val={stat25003lvl} />
                    </RowItem> 
                </Cont>
                <Cont className='stats_row_items'>
                    <RowItem className='RowItem_stat'>
                        <StatRow text='Комната на 5000' start ={true} />
                        <StatRow text='1 уровень' val={stat50001lvl} />
                        <StatRow text='2 уровень' val={stat50002lvl} />
                        <StatRow text='3 уровень' val={stat50003lvl} />
                    </RowItem>
                    <RowItem className='RowItem_stat'>
                        <StatRow text='Комната на 10000' start ={true} />
                        <StatRow text='1 уровень' val={stat100001lvl} />
                        <StatRow text='2 уровень' val={stat100002lvl} />
                        <StatRow text='3 уровень' val={stat100003lvl} />
                    </RowItem>   
                </Cont>
    </WrapperCont>
  )
})
const WrapperCont = styled.div`
    
`
const Cont = styled.div`
    
`
const RowItem = styled.div`
    
`


export default WrapperCont2; 
