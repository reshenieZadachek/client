import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../..'
import { httpPostRewiewDel } from '../../http/admin'
import { httpGetRewiews } from '../../http/rewiews'
import { PROFILE_ROUTE } from '../../utils/const'


const  ReviewsText = ({id, rewiewsPror}) => {
  const {rewiews} = useContext(Context)
  
  const { user } = useContext(Context)
  const path = process.env.REACT_APP_API_URL + rewiewsPror.avatar
  const DelRew = async () =>{
    let data;
    const formData = new FormData()
    formData.append('id', id)
    data = await httpPostRewiewDel(formData)
    httpGetRewiews(rewiews.page, rewiews.limit).then(data => {
      rewiews.setRewiews(data.rows)
      rewiews.setTotalCount(data.count)
    })
  }
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
        <Link style={{color:'white'}} to={PROFILE_ROUTE+'/'+rewiewsPror.usId}>
          <div style={stylelist}></div>
        </Link>
      </RewImg>
      <NameText>
        <Link style={{color:'white'}} to={PROFILE_ROUTE+'/'+rewiewsPror.usId}>
          <span> 
            {rewiewsPror.login}
          </span>
        </Link>
        <Text>
          {rewiewsPror.text}
        </Text>
      </NameText>
      {user.User.role === 'ADMIN'
        ?
        <AdmDel className='admdel' onClick={DelRew}>Удалить</AdmDel>
        :
        ''
      }
    </Cont>
  )
}

const Cont = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    flex: 0 1 auto;
    margin: 10px 0;
`
const AdmDel = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  padding: 10px;
  border: 1px solid red;
  border-radius: 10px;
  cursor: pointer;
  transition-duration: .3s;
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
