import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ROOMS_ROUTE } from '../../utils/const'


const  Market = observer(() => {
  return ( 
    <Info>
        <Div>
        •Основы маркетинга•

Маркетинг — это процесс создания, общения и обмена ценностью для клиентов с целью удовлетворения потребностей и получения прибыли. Это комплексный процесс, который включает в себя изучение потребностей клиентов, разработку продуктов или услуг, которые их удовлетворяют, и продвижение этих продуктов или услуг целевым образом.

•Основные принципы маркетинга•

•Ориентация на клиента:

Понимание и удовлетворение потребностей и желаний клиентов.

•Ценностное предложение: 

Предоставление клиентам ценности, которая превышает стоимость.

•Интеграция:

Рассмотрение всех аспектов маркетинга-микс (продукт, цена, место, продвижение).

•Устойчивость:

Ответственное управление маркетинговыми практиками и минимизация воздействия на окружающую среду.

•Измерение:

Отслеживание и оценка эффективности маркетинговых кампаний.

•Продукт:

Физический или виртуальный товар или услуга, предлагаемая клиентам.

•Цена:

Сумма, которую клиенты платят за продукт или услугу.

•Место:

Канал или средства, с помощью которых продукт или услуга доставляется клиентам.

•Продвижение:

Методы, используемые для информирования и убеждения клиентов приобрести продукт или услугу.

•Процесс маркетинга•

•Анализ рынка:

Изучение рыночных тенденций, конкурентов и потребностей клиентов.

•Сегментация рынка:

Разделение рынка на более мелкие группы на основе сходных характеристик.

•Выявление целевой аудитории:

Выбор сегмента рынка, на который будет нацелена маркетинговая кампания.

•Разработка маркетингового микса:

Определение соответствующих стратегий для каждого элемента маркетингового микса.

•Реализация маркетинговой кампании:

Выполнение разработанной маркетинговой стратегии.

•Оценка результатов:

Измерение эффективности маркетинговой кампании и внесение корректировок по мере необходимости.

•Бросающийся текст.

Заманивающий, грамотный и краткий текст это ключевая часть в маркетинге. Никто не захочет переходить на какой то проект, в котором будет плохо изложена мысль и текст с ошибками. Это самая ключевая часть по нашему субъективному мнению.

•Вирусные видео.

В видео обзоре или рекламном видео, должно нести собой: ,,почему должны выбрать именно вас?" То есть ваши + среди конкурентов. На видео слова не должны звучать однотонно и фон не должен быть пустым, фот должен быть ярким, а слова звучать уверенно и выразительно.

•Способы для раскрутки.

Способов очень много и рассказывать про все не думаю что обязательно. Рекламировать продукт/проект/многое другое, вы можете везде, от рассказа друзьям до написания текста под тематические посты в комменты, загрузку фоток/видео/текста в форумы, тик ток, ютуб short и прочее

•Шаблон текста.

•Перейти к своему пригласительному коду.

,,Перейти"

•Что вы получаете за приглашения людей на нашу платформу с обучением.

Вы получаете слайды(внутриигровая валюта), которые потом можете обменять почти на все что угодно или перейти к обучению ,,процентного накопления".
        </Div>
<br/>
<br/>
<Link onClick={() => {
    window.history.back()
}}><SwimBut>НАЗАД</SwimBut></Link>
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
export default Market; 