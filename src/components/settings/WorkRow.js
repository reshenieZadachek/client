import React, { useState } from 'react'
import styled from 'styled-components'
import SwimMes from '../SwimMes'

 const WorkRow = (props) => {
    const [popups, setPopups] = useState([]);
    const handleCopyClick = () => {
        const textArea = document.createElement("textarea");
        textArea.value = props.myref;
	textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            const data = 'Код скопирован успешно'
            const newPopup = { id: Date.now(), data };
            setPopups(prevPopups => [...prevPopups, newPopup]);
    
            // Удаляем всплывающее окно через 5 секунд
            setTimeout(() => {
            setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
            }, 5000);
        } catch (err) {
            const data = 'Ошибка! Код не был скопирован'
            const newPopup = { id: Date.now(), data };
            setPopups(prevPopups => [...prevPopups, newPopup]);
    
            // Удаляем всплывающее окно через 5 секунд
            setTimeout(() => {
            setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
            }, 5000);
        }
        document.body.removeChild(textArea);
      };
     const style = {
        minHeight: 'unset',
        padding: 0,
        maxWidth: 'calc(100% - 120px)',
    }
  return (
        <Wrap>
            <Cont>
                <Label>{props.labelValue}</Label>
                 {

                        props.labelValue == 'Ваш пригласительный код' ?
                        <ContRef>
                            <InpRow style={style}  onChange={props.func} value={props.val} placeholder={props.inputPlaceholder} />
                            <Copy onClick={handleCopyClick}>
                                скопировать
                            </Copy>
                        </ContRef>
                         :
                        <InpRow onChange={props.func} value={props.val} placeholder={props.inputPlaceholder} /> 
                 }
            </Cont>
            {
                    props.doubleRow?
                    <Cont>
                        <Label>{props.labelValue1}</Label>
                        <InpRow onChange={props.func1} value={props.val1} placeholder={props.inputPlaceholder1} />
                    </Cont>
                    :
                    ''
                }
                {popups.map(popup => (
        <SwimMes key={popup.id} text={popup.data} />
      ))}
        </Wrap>
  )
}

const Wrap = styled.div`
    display: flex;
    flex: 0 1 auto;
    min-height: 25px;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`
const Cont = styled.div`
    display: flex;
    flex: 1 1 auto;
    margin: 0 20px 10px 20px;
    flex-direction: column;
`
const Label = styled.label`
    margin-bottom: 10px;
`
const InpRow = styled.input`
    margin: 0;
    background-color: #262b37;
    min-height: 20px;
    padding: 10px;
    background: #262b37;
    color: white;
    border: unset;
    border-radius: 10px;
    outline: none;
    max-height:40px;
    flex: 1 1 auto;
`
const ContRef = styled.div`
    display: flex;
    position: relative;
    margin: 0;
    background-color: #262b37;
    min-height: 20px;
    padding: 10px;
    background: #262b37;
    color: white;
    border: unset;
    border-radius: 10px;
    outline: none;
    max-height: 40px;
    flex: 1 1 auto;
    align-items: center;
`
const Copy = styled.div`
    cursor: pointer;
    border-radius: 5px;
    position: absolute;
    padding: 5px;
    right: 10px;
    min-width: 70px;
    background: #f6a617;
    color: white;
    font-size: 16px;
`
const DivInpRow = styled.div`
    margin: 0;
    background-color: #262b37;
    min-height: 20px;
    padding: 10px;
    background: #262b37;
    color: white;
    border: unset;
    border-radius: 10px;
    outline: none;
    display: flex;
    align-items:center;
    max-height:40px;
`

export default WorkRow
