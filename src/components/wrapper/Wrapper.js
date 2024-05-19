import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import WrapperCont1 from './WrapperCont1'
import WrapperCont2 from './WrapperCont2'

const Wrapper = observer(() => {
  return (
    <Wrapperr>
        <ContentBody>
            <WrapperCont1 />
            <WrapperCont2 mystyle={{flex: '0 1 auto'}} />
        </ContentBody>     
    </Wrapperr>
  )
})


const Wrapperr = styled.div`
    position: relative;
    flex-wrap: wrap;
    display: flex;
    flex: 1 1 auto;
    padding-top:10px;
    width:100%;
    flex-direction: column;
    min-height: calc(100vh - 197px);
    justify-content: center;
    align-items: center;
    border-top: 0.5px solid #2d3340;
`
const ContentBody = styled.div`
    flex-direction: column;
    display: flex;
    flex: 1 1 auto;
    max-width: 1200px;
    justify-content: center;
    border-radius: 10px;
`

export default Wrapper