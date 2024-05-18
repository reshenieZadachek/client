import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ROOMS_ROUTE } from '../../utils/const'


const  ThirdStage = observer(() => {
  return ( 
    <Info>
        <Div>
        
<h3><span style={{color:'#f6a617'}}>•</span>Вывод<span style={{color:'#f6a617'}}>•</span></h3>
<ul style={{marginLeft: '15px'}}>
  <li>Накопительный счет выступает сегодня реальной альтернативой банковскому вкладу.</li>
  <li>Условия предоставления продукта определяются каждым банком самостоятельно.</li>
  <li>В общем случае, основными особенностями НС выступают: отсутствие ограничение по сумме и срокам, эффективная процентная ставка и возможность как пополнить, так и снять деньги со счета.</li>
</ul>
<br/>
<h3><span style={{color:'#f6a617'}}>•</span>Подведем итоги нашего обучения.<span style={{color:'#f6a617'}}>•</span></h3>

Вы получили понимание того, как работает накопительный счет, какие подводные камни и преимущества имеет накопитпльный счет, ответили на часто задаваемые вопросы по накопительному счету
<br/>
<br/>
        </Div>
<Link to={ROOMS_ROUTE}><SwimBut>НАЗАД</SwimBut></Link>
    </Info>
  )
})

const Info = styled.div`
    line-height: 22px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
`
const SwimBut = styled.div`
line-height: normal;
background-color: #f6a617;
padding: 5px;
border-radius: 50%;
justify-content: center;
align-items: center;
font-size: 13pt;
cursor: pointer;
display: flex;
z-index: 2;
`
const Div = styled.div`
display: flex;
    flex-direction: column;
    //flex: 1 1 auto;
`
export default ThirdStage; 
