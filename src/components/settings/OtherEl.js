import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../..'

 const OtherEl = observer((props) => {
    const { user } = useContext(Context)
    console.log(user.User);
  return (
        <Wrap>
            <Cont>
                <LabUp>{props.text}</LabUp>
                <WrapInp>
                    <div style={{height:props.heightmy,width:props.widthmy}} className={`checkOth`}></div>
                    <LabDown onClick={props.func}></LabDown>
                </WrapInp>
            </Cont>
        </Wrap>
  )
})

const Wrap = styled.div`
    display: flex;
    flex: 0 1 auto;
    min-height: 25px;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`

const Cont = styled.div`
    flex-direction: row;
    min-height: 50px;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    display: flex;
    flex: 1 1 auto;
`
const LabUp = styled.label`
    margin-bottom: 10px;
`


const WrapInp = styled.div`
    width: 28px;
    height: 28px;
    border: 1px solid #f6a617;
    border-radius: 50%;
    position: relative;
    transition-duration: .3s;
    overflow: hidden;
    background-color: #f6a617;
`
const Inp = styled.input`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 100px;
    border: 2px solid #00EA90;
`
const LabDown = styled.label`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 50%;
    top: 0px;
    width: 29px;
    height: 29px;
    left: 0px;
    transition-duration: .3s;
`

export default OtherEl