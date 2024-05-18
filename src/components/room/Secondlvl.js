import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { Context } from '../..'

const  Secondlvl = observer((props) => {
    const { user } = useContext(Context)
    const { extendedArray } = props
  return (
        <Row>
            {extendedArray.map((item, index) => (
                <div key={index} className=''>
                    {item.avatar && (item.id && (item.id == user.User.id && <div className='testAvatar2 sircle_middle_level' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL + item.avatar})`, border: '1px solid red'}}></div>))}
                    {item.avatar && (item.id && (item.id != user.User.id && <div className='testAvatar2 sircle_middle_level' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL + item.avatar})`}}></div>))}
                    {!item.avatar && <div className='testAvatar2 sircle_middle_level'></div>}
                </div>
            ))} 
        </Row>
  )
})

const Row = styled.div`
display: flex;
flex-direction: column;
height: 90%;
justify-content: space-around;
align-items: center;
padding: 10px;
`
const Сell = styled.div`

`

export default Secondlvl; 
