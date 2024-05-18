import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ROOMS_ROUTE } from '../../utils/const'


const  SecondStage = observer(() => {
  return ( 
    <Info>
        <Div>
<h3><span style={{color:'#f6a617'}}>•</span>Как пополнить накопительный счет<span style={{color:'#f6a617'}}>•</span></h3>
Важным преимуществом НС выступает не только возможность, но и удобством пополнения. Сегодня владельцам накопительного счета доступны сразу три способа решения данной задачи:

<ol style={{marginLeft: '15px'}}>
  <li>В личном кабинете на сайте банка. Простой и быстрый вариант пополнения. Требует авторизации на сайте и указания реквизитов для перевода денежных средств.</li>
  <li>В офисе банковской организации. Традиционный способ пополнить накопительный счет. Предусматривает внесение наличных в кассу банка или использование для этого банкомата.</li>
  <li>В мобильном приложении. Не менее удобный способ решения задачи. Требует скачивания и установки приложения банка, что обычно делается бесплатно. Деньги зачисляются мгновенно, а современные инструменты шифрования надежно защищают деньги клиента.</li>
</ol>
<br/>  
<h3><span style={{color:'#f6a617'}}>•</span>Как начисляются проценты на накопительный счет<span style={{color:'#f6a617'}}>•</span></h3>
Ключевым отличием НС от прочих банковских продуктов становится начисление процентов по эффективной ставке. Она рассчитывается в зависимости от правил конкретного банка по одному из двух возможных способов. Для большей наглядности каждый целесообразно рассмотреть более детально.

Проценты на среднемесячный остаток
Первый вариант расчета предусматривает отсутствие изменений по величине остатка в течение месяца. То есть за указанный период времени не было ни пополнений, ни снятий. В этом случае на всю сумму начисляется повышенный процент.

Если пополнения были, на их размер начисляется процент до востребования. Если были снятия, повышенная ставка используется на минимальный остаток. На остальную сумму начисляется процент до востребования.

Проценты на минимальный остаток
Вторая схема расчета процентов напоминает первую. Но с небольшим уточнением. За основу для начисления повышенной ставки используется минимальная величина остатка в течение месяца. К остальной сумме по итогам отчетного периода используется процент до востребования.
<br/><br/>
<h3><span style={{color:'#f6a617'}}>•</span>Застрахованы ли накопительные счета в банках?<span style={{color:'#f6a617'}}>•</span></h3>
НС входят в число банковских продуктов, которые подлежат обязательному страхованию. Максимальная сумма возмещения составляет 1,4 млн. руб. В этом смысле НС ничем не отличается от накопительного вклада или сберегательного счета.
<br/><br/>
<b><span style={{color:'#f6a617'}}>•</span>Как рассчитываются налоги с накопительных счетов?</b>
Действующее в России фискальное законодательство предусматривает взимание налога на проценты по вкладам или счетам, включая накопительные. Но рядовым клиентам банков беспокоиться на этот счет не стоит. Дело в том, что налогообложению подлежат только доходы, а не сама сумма на счете. Кроме того, не учитывают те доходы, которые не превышают ставку рефинансирования +5 пунктов к ней. То есть практически все накопительные счета.
<br/><br/>
<b>Можно ли снимать деньги с накопительного счета?</b>
Возможность и правила снятия денег с открытого НС определяются банком. В подавляющем большинстве случаев такая опция предусмотрена договором, так как она входит в число характерных особенностей накопительного счета.
<br/><br/>
<b><span style={{color:'#f6a617'}}>•</span>Как снять деньги с накопительного счета?</b>
Снятие денежных средств происходит двумя способами. Первый – перевод на дебетовую карту, открытую клиентом в том же банке. Второй – получение наличных в кассе банковского учреждения.
<br/><br/>
<b><span style={{color:'#f6a617'}}>•</span>Можно ли заработать на накопительном счете?</b>
Да, причем сумму, вполне сопоставимую с обычным депозитом. Для этого необходимо по максимуму использовать преимущества и минимизировать неудобства банковского продукта.
<br/><br/>
<b>Можно ли пользоваться накопительным счетом без карты?</b>
Такая возможность предусмотрена правилами большей части отечественных банков. Единственным недостатком такого варианта сотрудничества становится необходимость посещать банковский офис для снятия денежных средств с НС.
<br/><br/>
<b><span style={{color:'#f6a617'}}>•</span>Сколько накопительных счетов можно открыть?</b>
Количество доступных для открытия НС определяется правилами банком. Например, Тинькофф ограничивает клиентов десятью подобными счетами. В любом случае перед началом сотрудничества имеет смысл уточнить этот вопрос у сотрудника конкретного финансового учреждения.
<br/><br/>
<b><span style={{color:'#f6a617'}}>•</span>
Как закрыть накопительный счет?</b>
Для этого необходимо заполнить и отправить в банк заявку – или онлайн, или в бумажном формате непосредственно в офисе. Точный порядок закрытия НС регламентируется правилами банковской организации.
<br/><br/>
<b><span style={{color:'#f6a617'}}>•</span>Зачем банку накопительные счета?</b>
НС выступают еще одним способом привлечь денежные средства потенциальных клиентов. Каждый банк, особенно крупный, крайне заинтересован в этом способе получения финансовых ресурсов.
        </Div>
        
<br/>
<br/>
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
    flex: 1 1 auto;
`
export default SecondStage; 
