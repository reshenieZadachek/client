import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PROFILE_ROUTE } from '../../utils/const'


const  ReviewsText = ({rewiews}) => {
  const path = process.env.REACT_APP_API_URL + rewiews.avatar

  const stylelist = {
    width:50,
    height:50,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${path})`,
    borderRadius: '50%',
}

  return ( 
    <Cont>
      
      <RewImg>
        <Link style={{color:'white'}} to={PROFILE_ROUTE+'/'+rewiews.usId}>
          <div style={stylelist}></div>
        </Link>
      </RewImg>
      <NameText>
        <Link style={{color:'white'}} to={PROFILE_ROUTE+'/'+rewiews.usId}>
          <span> 
            {rewiews.login}
          </span>
        </Link>
        <Text>
          {rewiews.text}
        </Text>
      </NameText>
    </Cont>
  )
}

const Cont = styled.div`
    display: flex;
    flex: 0 1 auto;
    margin: 10px 0;
`
const RewImg = styled.span`
    padding: 5px;
`
const Text = styled.span`
    word-break: break-all;
`
const NameText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 10px;
`
export default ReviewsText; 
