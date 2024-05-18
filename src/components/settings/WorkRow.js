import React from 'react'
import styled from 'styled-components'

 const WorkRow = (props) => {

  return (
        <Wrap>
            <Cont>
                <Label>{props.labelValue}</Label>
                 {
                    props.value ?
                    <DivInpRow>{props.value}</DivInpRow>
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