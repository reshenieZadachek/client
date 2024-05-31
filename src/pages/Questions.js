import React from 'react'
import styled from 'styled-components'


const  Questions = () => {
  return (
    <Wrapperr>
      <ContentBody>
        <WrapSet>
              <RowItem1>
            </RowItem1>    
        </WrapSet>
      </ContentBody>
    </Wrapperr>
  )
}

const Wrapperr = styled.div`
  position: relative;
  display: flex;
  margin-top: 75px;
  flex: 1 1 auto;
  padding-top:10px;
  width:100%;
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
const RewCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 1200px;
`
const SendRew = styled.div`
    padding: 5px 10px 10px 10px;
    display: flex;
    position: relative;
    width:100%;
    justify-content:center;
`
const ContRew = styled.div`
    display: flex;
    flex: 1 1 auto;
    max-width: 400px;
    flex-wrap: wrap;
    justify-content:center;
`
const RewInput = styled.input`
    background-color: #414551;
    margin: 10px 0;
    padding: 20px;
    color: white;
    border: unset;
    border-radius: 10px;
    width:100%;
    outline: none;
`
const RewBut = styled.button`
  width: 100%;
  padding: 10px;
  background: #f6a617;
  color: #20242d;
  font-size: 12pt;
  border-radius: 10px;
  border: unset;
  cursor: pointer;
`

export default Questions; 
