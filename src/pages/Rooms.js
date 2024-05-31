import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '..'
import { httpGetMyRooms } from '../http/rooms'
import styled from 'styled-components'
import WrapperContRoom from '../components/room/WrapperContRoom'
import WrapperCont2 from '../components/wrapper/WrapperCont2'
import Spinner from 'react-bootstrap/Spinner';

//import styled from 'styled-components'

const  Rooms = observer(() => {
  const {user} = useContext(Context);
  const { room } = useContext(Context)
  const [loading,setLoading] = useState(true)
  const style = {
    position: 'relative',
    flexWrap: 'wrap',
    display: 'flex',
    flex: '1 1 auto',
    paddingTop:'10px',
    width:'100%',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 197px)',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '0.5px solid #2d3340',
  }
    
  
  useEffect(() => {
    httpGetMyRooms(user.User.id, user.User.price).then(data => {
      room.setMyRoom(data)
    }).finally(() => {setLoading(false)})
  }, []);
  useEffect(() => {
    httpGetMyRooms(user.User.id, user.User.price).then(data => {
      room.setMyRoom(data);
    }).finally(() => {setLoading(false)})
  }, [user.User.price]);
    if (loading){
      return(
        <Spinner style={style} animation="border" role="status"><span>Loading...</span></Spinner>
      )
    }
  
  return (
    <Wrapperr>
        <ContentBody>
            <WrapperContRoom/>
            <WrapperCont2  mystyle={{flex: '0 1 auto'}}/>
        </ContentBody>     
    </Wrapperr>
  )
})
const Wrapperr = styled.div`
position: relative;
display: flex;
  margin-top: 75px;
flex: 1 1 auto;

width: 100%;
min-height: calc(100vh - 197px);
justify-content: center;
border-top: 0.5px solid #2d3340;
`
const ContentBody = styled.div`
display: flex;
flex-direction: column;
max-width: 1200px;
flex: 1 1 auto;
`

export default Rooms; 
