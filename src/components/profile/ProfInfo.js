import { observer } from 'mobx-react-lite'
import React from 'react'
import styled from 'styled-components'


const  ProfInfo = observer(({profInfost}) => {
  let path = process.env.REACT_APP_API_URL + profInfost.avatar
  let login = profInfost.login
  const img = {
    backgroundImage: `url(${path})`,
  }
  return ( 
    <Info className='profWind'>
        <Cont>
            <Ava style={img} />
            <Log>
                {login}
            </Log>
        </Cont>
    </Info>
  )
})

const Info = styled.div`
    flex: 1 1 20%;
    padding: 20px 0;
    margin: 0px;
    border-radius: 0px;
    padding: 10px 0;
    display: flex;
    height: 100%;
    background-color: #262b37;
    flex-direction: column;
`
const Cont = styled.div`
    justify-content: center;
    align-items: center;
    margin: auto;
    display: flex;
    flex-direction: column;
`
const Ava = styled.div`
    border-radius: 10px;
    height: 100px;
    width: 100px;
    background-size: no-repeat;
    background-position: center;
    background-size: cover;
    margin-bottom: 10px;
`
const Log = styled.div`

`
export default ProfInfo; 
