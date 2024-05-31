import React, { useState } from 'react';
import './MenuMobile.css';
import WrapButtonsMob from './WrapButtonMob'
import WrapButtons from './WrapButton'
import styled from 'styled-components'
import { MARKETING_ROUTE } from '../../utils/const';
import { Link } from 'react-router-dom';

const MenuMobile = ({showModal, joinFunc, PassF, go}) => {
  const styleLink = {
    flexDirection: 'row',
    width: '80%',
    position: 'relative',
    margin: '5px 0',
    display: 'flex',
    minHeight: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: '1 1 auto',
    borderRadius: '10px',
    backgroundColor: '#f6a617',
    cursor: 'pointer',
    transitionDuration: '.5s',
    fontSize: '11pt',
    color: 'white',
}
  return (
    <Menu className={`pc_none modal ${showModal ? 'show' : 'hide'}`}>
        <Cont>
        <WrapButtonsMob joinFunc={joinFunc} PassF={PassF} row = {1} text='Обучение за ' val={1000}  />
        <WrapButtonsMob joinFunc={joinFunc} PassF={PassF} row = {1} text='Обучение за '  val={2500} />
        <WrapButtonsMob joinFunc={joinFunc} PassF={PassF} row = {1} text='Обучение за '  val={5000} />
        <WrapButtonsMob joinFunc={joinFunc} PassF={PassF} row = {1} text='Обучение за '  val={10000} />
        <WrapBut>
        <Link className='WrapBut' to={MARKETING_ROUTE} style={styleLink}>
          Обучение маркетингу
        </Link>
        </WrapBut>
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
const WrapBut = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    background: #20242d;
    align-items: center;
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
