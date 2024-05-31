import React, { useState } from 'react';
import './MenuMobile.css';
import WrapButtonsMob from './WrapButtonMob'
import styled from 'styled-components'

const MenuMobile = ({showModal, joinFunc, PassF}) => {
  return (
    <Menu className={`pc_none modal ${showModal ? 'show' : 'hide'}`}>
        <Cont>
        <WrapButtonsMob joinFunc={joinFunc} PassF={PassF} row = {1} text='Обучение за ' val={1000}  />
        <WrapButtonsMob joinFunc={joinFunc} PassF={PassF} row = {1} text='Обучение за '  val={2500} />
        <WrapButtonsMob joinFunc={joinFunc} PassF={PassF} row = {1} text='Обучение за '  val={5000} />
        <WrapButtonsMob joinFunc={joinFunc} PassF={PassF} row = {1} text='Обучение за '  val={10000} />
        </Cont>
    </Menu>
  );
};
const Menu = styled.div`
    display: flex;
    height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  z-index: 26;
  background-color: #20242d;
  overflow: hidden;
`
const Cont = styled.div`
display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    `
export default MenuMobile;
