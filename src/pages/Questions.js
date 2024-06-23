import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Questions = () => {
  const [hide, setHide] = useState(false);
  const [highlightedSection, setHighlightedSection] = useState(null);
  const containerRef = useRef(null);

  const scrollToSection = (sectionId) => {
    setHide(0)
    const section = document.getElementById(sectionId);
    if (section && containerRef.current) {
      containerRef.current.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });

      setHighlightedSection(sectionId);
      setTimeout(() => {
        setHighlightedSection(null);
      }, 2000);
    }
  };

  return (
    <Wrapperr>
      <ContentBody>
        <WrapSet>
          <RowItem1 ref={containerRef}>
            <Section>
              <h3
              id='account'
              className={highlightedSection === 'account' ? 'section highlight' : 'section'}>
                <span style={{ color: '#f6a617' }}>•</span>Вопросы по аккаунту<span style={{ color: '#f6a617' }}>•</span>
              </h3>
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Как зарегистрироваться:
              </b>
              <br />
              1. Нажмите на кнопку "Регистрация" в правом верхнем углу главной страницы сайта.
              <br />
              2. Заполните регистрационную форму, указав имя пользователя, адрес электронной почты и пароль.
              <br />
              3. Проверьте правильность введенных данных и нажмите "Зарегистрироваться".
              <br />
              <br />
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Как восстановить пароль:
              </b>
              <br />
              Восстановить пароль на сайте никак не выйдет так что запоминайте его.
              <br />
              <br />
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Какие правила поведения:
              </b>
              <br />
              Ознакомьтесь с ними внимательно, чтобы избежать нарушений и последующей блокировки аккаунта.
              <br />
              <br />
              Правила включают в себя:
              <br />
              * Не размещайте оскорбительный или спам-контент.
              <br />
              * Будьте вежливы и уважайте других участников сайта.
              <br />
              * Не нарушайте авторские права.
              <br />
              * Не используйте ненормативную лексику.
              <br />
              * Соответствуйте тематике сайта и размещайте релевантный контент.
              <br />
              <br />
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Как поменять аватар:
              </b>
              <br />
              1. Перейдите в свой профиль.
              <br />
              2. Нажмите на свой аватар.
              <br />
              3. Выберите изображение с вашего устройства.
              <br />
              4. После предпросмотра подтвердите изменение.
              <br />
              <br />
            </Section>
            <Section>
              <h3
              id='techno'
              className={highlightedSection === 'techno' ? 'section highlight' : 'section'}>
                <span style={{ color: '#f6a617' }}>•</span>Технические проблемы сайта<span style={{ color: '#f6a617' }}>•</span>
              </h3>
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Что делать, если программа не запускается?
              </b>
              <br />
              Написать об этом в поддержку, поддержка поможет решить эту проблему.
              <br />
              <br />
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Как восстановить забытый пароль?
              </b>
              <br />
              На нашем сайте пока нет возможности восстановления пароля, поэтому просим вас запомнить ваш пароль.
              <br />
              <br />
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Как связаться с технической поддержкой?
              </b>
              <br />
              Снизу сайта есть кнопка "задать другой вопрос", перейдите по ней и задайте нам ваш вопрос.
              <br />
              <br />
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Как настроить учетную запись?
              </b>
              <br />
              В правом верхнем углу есть кружок, нажмите на него и перейдите в настройки.
              <br />
              <br />
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Что делать при возникновении ошибки?
              </b>
              <br />
              Написать об этом в поддержку, поддержка поможет решить эту проблему.
              <br />
              <br />
            </Section>
            <Section>
              <h3 id='other' className={highlightedSection === 'other' ? 'section highlight' : 'section'}>
                <span style={{ color: '#f6a617' }}>•</span>Другие вопросы<span style={{ color: '#f6a617' }}>•</span>
              </h3>
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Можно ли использовать ваши материалы на своем сайте?
              </b>
              <br />
              Вся информация на сайте защищена авторским правом и не может быть копирована или распространена без согласия владельца сайта.
              <br />
              <br />
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Можно ли рекламировать на вашем сайте?
              </b>
              <br />
              Реклама сторонних сайтов и материалов на нашем сайте запрещена.
              <br />
              <br />
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Есть ли у вас рассылка новостей?
              </b>
              <br />
              Для этого у нас есть телеграм-канал, в котором публикуются все нововведения и новости о проекте.
              <br />
              <br />
              <b>
                <span style={{ color: '#f6a617' }}>•</span>Как внести предложение по улучшению контента?
              </b>
              <br />
              Снизу сайта есть кнопка "сотрудничество", нажмите на нее и дождитесь пока с вами свяжется администрация.
              <br />
              <br />
            </Section>
          </RowItem1>
          <RowItem2 className='mobile_none'>
            <RowItem2El1>
              <ButA onClick={() => scrollToSection('account')}>
                Вопросы по аккаунту
              </ButA>
              <ButA onClick={() => scrollToSection('techno')}>
                Технические проблемы
              </ButA>
              <ButA onClick={() => scrollToSection('other')}>
                Другие вопросы
              </ButA>
            </RowItem2El1>
            
          </RowItem2>
          <SwimBut onClick={() => setHide(!hide)}>Вопросы</SwimBut>
          <Menu className={`pc_none modal ${hide ? 'show' : 'hide'}`}>
            <Cont>
              <But onClick={() => scrollToSection('account')}>
                Вопросы по аккаунту
              </But>
              <But onClick={() => scrollToSection('techno')}>
                Технические проблемы
              </But>
              <But onClick={() => scrollToSection('other')}>
                Другие вопросы
              </But>
            </Cont>
          </Menu>
        </WrapSet>
      </ContentBody>
    </Wrapperr>
  );
};

const But = styled.a`
  flex-direction: row;
  width: 80%;
  position: relative;
  margin: 5px 0;
  display: flex;
  min-height: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 0 1 auto;
  border-radius: 10px;
  background-color: #f6a617;
  cursor: pointer;
  transition-duration: .5s;
  font-size: 11pt;
  color: white;
`;

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
`;

const WrapBut = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background: #20242d;
  align-items: center;
`;

const Cont = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SwimBut = styled.div`
  text-transform: uppercase;
  padding: 1px;
  right: 0px;
  font-size: 10pt;
  top: 40%;
  display: none;
  position: fixed;
  width: 15px;
  writing-mode: vertical-lr;
  text-orientation: upright;
  background-color: #f6a617;
  user-select: none;
  border-radius: 5px 0 0 5px;
  z-index: 27;
  @media screen and (max-width:720px){
    display: flex;
  }
`;

const ButA = styled.div`
  flex-direction: row;
  width: 90%;
  position: relative;
  margin: 5px 0;
  display: flex;
  min-height: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 0 1 auto;
  border-radius: 10px;
  background-color: #f6a617;
  cursor: pointer;
  transition-duration: .5s;
  font-size: 11pt;
  color: white;
`;

const RowItem2 = styled.div`
  margin-left: 5px;
  flex: 0 1 30%;
  flex-direction: column;
  padding: 10px;
  display: flex;
  border-radius: 10px;
  background-color: #262b37;
`;

const RowItem2El1 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const RowItem2El2 = styled.div`
  flex: 1 1 auto;
  flex-direction: column;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Wrapperr = styled.div`
  position: relative;
  margin-top: 75px;
  display: flex;
  flex: 1 1 auto;
  padding-top: 10px;
  width: 100%;
  height: calc(100vh - 197px);
  justify-content: center;
  border-top: 0.5px solid #2d3340;
`;

const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  flex: 1 1 auto;
  padding: 10px;
`;

const WrapSet = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  min-height: 100px;
  justify-content: center;
  border-radius: 10px;
  color: white;
`;

const RowItem1 = styled.div`
  flex-direction: column;
  flex: 1 1 auto;
  padding: 10px;
  overflow-y: scroll;
  justify-content: flex-start;
  display: flex;
  border-radius: 10px;
  background-color: #262b37;

  .highlight {
    animation: highlight-animation 2s;
  }

  @keyframes highlight-animation {
    0% {
      background-color: #f6a617;
    }
    100% {
      background-color: #262b37;
    }
  }
`;

const Section = styled.div`
  border-radius: 5px;
  transition: background-color 0.5s;
`;

export default Questions;
