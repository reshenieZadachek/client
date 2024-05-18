import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { httpGetStat } from '../../http/game';

export default function StatRow(props) {
    
    const stylelist = {
        border: '0',
        margin: '10px 0 0 0 ',
    }

  return (
        <StatRowst style ={
            props.start 
            ?
            {cursor: 'pointer'}
            :
            {}
        }>
            <El>
            {props.text}
            </El>
            {
            !props.start 
            ?
            <El>
                {props.val||0}
            </El>
            :
            ''
        }
            
        </StatRowst> 
  )
}
const StatRowst = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    min-width: 150px;
    flex-direction: row;
    border: 1px solid #f6a617;
    transition-duration: .5s;
`
const El = styled.div`
    display: flex;
    min-height: 50px;
    justify-content: center;
    align-items: center;
    flex: 1 1 50%;
`