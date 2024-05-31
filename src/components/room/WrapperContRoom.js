import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { Context } from '../..'
import { useContext } from 'react'
import { FIRSTSTAGE_ROUTE, SECONDSTAGE_ROUTE, THIRDSTAGE_ROUTE } from '../../utils/const'
import RoomButtons from './RoomButtons'
import ViewRoom from './ViewRoom'

const  WrapperContRoom = observer(() => {
    const { user } = useContext(Context)
    
  return (
    <WrapperrCont>
        <TestEl>
            <RowItem1>
                  <ViewRoom />
            </RowItem1>    
            <RowItem2>
                <RowItem2El1>
                    <RoomButtons to={FIRSTSTAGE_ROUTE} row = {1} text='Первый этап обучения' val={1} act={
                        user.User.roomlvl >= 1
                        ?
                        1
                        :
                        0
                    }/>
                </RowItem2El1>
                <RowItem2El1>
                    <RoomButtons to={SECONDSTAGE_ROUTE} row = {1} text='Второй этап обучения' val={3} act={
                        user.User.roomlvl >= 2
                        ?
                        1
                        :
                        0
                    }/>
                </RowItem2El1>
                <RowItem2El1>
                    <RoomButtons to={THIRDSTAGE_ROUTE} row = {1} text='Третий этап обучения' val={5} act={
                        user.User.roomlvl >= 3
                        ?
                        1
                        :
                        0
                    }/>
                </RowItem2El1>
            </RowItem2> 
        </TestEl>
    </WrapperrCont>
  )
})
const TestEl = styled.div`
    flex: 1 1 auto;
    padding: 10px;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
`


const WrapperrCont = styled.div`
position: relative;
display: flex;
flex: 1 1 auto;
width: 100%;
min-height: 100px;
justify-content: center;
border-radius: 10px;
color: white;
`

const RowItem1 = styled.div`
position:relative;
    flex-direction: column;
    flex: 1 1 auto;
    display: flex;
    width:100%;
    max-width: 1200px;
    border-radius: 10px;
    background-color: #262b37;
`

const RowItem2 = styled.div`
    margin: 10px 0 0 0;
    flex: 0 1 auto;
    width:100%;
    display: flex;
    border-radius: 10px;
    justify-content: space-around;
    background-color: #262b37;
    max-width: 1200px;
`
const RowItem2El1 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1 1 auto;
    flex-direction: column;
`
const RowItem2El2 = styled.div`
    flex: 1 1 auto;
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const TextWrap = styled.div`
    display: flex;
    width: 100%;
`

export default WrapperContRoom; 
