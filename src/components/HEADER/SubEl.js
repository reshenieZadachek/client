import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Context } from '../../';
import { PROFILE_ROUTE } from '../../utils/const';

const  SubEl = observer((props) => {
    
    const {user} = useContext(Context)
    const path = process.env.REACT_APP_API_URL + user.User.avatar
  return (
    <Link to={props.go} onClick={props.func} className='SubHeadEl'>
        <SubEll>
            {
                props.usProf
                ?
                <ProfImg style = {{backgroundImage: `url(${path})`,borderRadius: '3px'}}></ProfImg>
                :
                props.icon
            }
            
        </SubEll>
        <SubEll>
            {
                props.usProf
                ?
                user.User.login
                :
                props.text
            }
        </SubEll>
    </Link>
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
export default SubEl; 
