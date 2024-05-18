import React from 'react'
import styled from 'styled-components'
import Foot from './Foot'

export default function Footer() {
  return (
    <Footer1>
        <Foot />
    </Footer1>
  )
}

const Footer1 = styled.footer`
    width: 100%;
    height: 100px;
    display: flex;
    flex: 0 1 auto;
    justify-content: center;
    align-items: center;
`
