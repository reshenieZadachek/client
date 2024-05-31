import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import FirstStage from '../components/learn/FirstStage'
import Market from '../components/learn/Market'
import SecondStage from '../components/learn/SecondStage'
import ThirdStage from '../components/learn/ThirdStage'
import { FIRSTSTAGE_ROUTE, SECONDSTAGE_ROUTE, THIRDSTAGE_ROUTE } from '../utils/const'


const  Learn = () => {
  const location = useLocation()
  const is1St = location.pathname === FIRSTSTAGE_ROUTE
  const is2St = location.pathname === SECONDSTAGE_ROUTE
  const is3St = location.pathname === THIRDSTAGE_ROUTE
  return (
    <Wrapperr>
      <ContentBody>
        <WrapSet>
            <RowItem1>
              {
                is1St && <FirstStage />
              }
              {
                is2St && <SecondStage />
              }
              {
                is3St && <ThirdStage />
              }
              {
               (!is1St & !is2St & !is3St) ? <Market />
		:
		''
              }
            </RowItem1>    
        </WrapSet>
      </ContentBody>
    </Wrapperr>
  )
}

const Wrapperr = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  width:100%;
  margin-top: 75px;
  min-height: calc(100vh - 197px);
  justify-content: center;
  border-top: 0.5px solid #2d3340;
`
const ContentBody = styled.div`
  display:flex;
  flex-direction: column;
  max-width: 1200px;
  flex: 1 1 auto;
  padding: 10px;
`
const WrapSet = styled.div`
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
    flex-direction: column;
    flex: 1 1 auto;
    padding: 10px;
    justify-content: flex-start;
    display: flex;
    border-radius: 10px;
    background-color: #262b37;
`
const Rew = styled.div`
    flex: 1 1 auto;
    display: flex;
    border-bottom: 1px solid #414551;
    max-height: 85px;
`


export default Learn; 
