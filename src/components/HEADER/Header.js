import { observer } from 'mobx-react-lite'
import React from 'react'
import styled from 'styled-components'
import Head from './Head'

 const Header = observer((props) => {
  return (
    <Headerr>
        <Head />
    </Headerr>
  )
})

const Headerr = styled.header`
    width: 100%;
    height: 75px;
    display: flex;
    position: fixed;
    z-index: 3;
    top: 0px;
    background : #20242d;
    flex: 0 1 auto;
    justify-content: center;
    align-items: center;
`
export default Header
