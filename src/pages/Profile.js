import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import WrapperCont2 from '../components/wrapper/WrapperCont2';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { Context } from '..';
import { httpGetProf } from '../http/profile';
import ProfInfo from '../components/profile/ProfInfo';
//import styled from 'styled-components'

const  Profile = observer(() => {
  const [ allPopoln, setAllPopoln ] = useState(0)
  const [ allVivod, setAllVivod ] = useState(0)

  const {id} = useParams()
  const { profInfost } = useContext(Context)
    useEffect(() => {
      httpGetProf(id).then(data => {
        profInfost.setLogin(data.profile.login)
        profInfost.setAvatar(data.profile.avatar)
        setAllPopoln(data.historyPopoln)
        setAllVivod(data.historyVivel)
      })
    }, [])
    useEffect(() => {
      httpGetProf(id).then(data => {
        profInfost.setLogin(data.profile.login)
        profInfost.setAvatar(data.profile.avatar)
      })
    }, [id])
  return ( 
    <Wrapperr>
      <ContentBody>
        <WrapSet>
              <RowItem1 className='style_col'>
                <ProfInfo profInfost={profInfost}/>
                <WorkZone className='profWind'>
                  <WorkRow>
                    <WRBlock>
                        <label>
                        Пополнил
                        </label>
                        <TextBl>
                        {allPopoln ? allPopoln :'Операций не производилось'}
                        </TextBl>
                    </WRBlock>
                    <WRBlock>
                    <label>
                          Обменял
                        </label>
                        <TextBl>
                        {allVivod ? allVivod :'Операций не производилось'}
                        </TextBl>
                    </WRBlock>
                  </WorkRow>
                  <WorkRow>
                  <WRBlock>
                    <label>
                          Статистика обучений
                        </label>
                        <TextBl>
                        статистика недоступна во время бета теста
                        </TextBl>
                    </WRBlock>
                  </WorkRow>
                </WorkZone>
              </RowItem1>    
        </WrapSet>
        <WrapperCont2 mystyle={{flex: '0 1 auto'}}/>
      </ContentBody>
    </Wrapperr>
  )
})

const Wrapperr = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  padding-top:10px;
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
    flex: 1 1 auto;
    padding: 10px;
    align-items: center;
    display: flex;
    border-radius: 10px;
`

const WorkZone = styled.div`
  flex: 1 1 80%;
  justify-content: space-around;
  flex-direction:column;
  background-color: #2e3442;
  margin: 0px;
  border-radius: 0px;
  padding: 10px;
    display: flex;
    height: 100%;
`
const WorkRow = styled.div`
  display: flex;
  flex: 1 1 auto;
  min-height: 25px;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`
const WRBlock = styled.div`
  display: flex;
  flex: 1 1 auto;
  margin: 0 20px 10px 20px;
  flex-direction: column;
  margin: 20px;
`
const TextBl = styled.div`
  color: #f6a617;
  margin-top: 5px;
`
export default Profile; 
