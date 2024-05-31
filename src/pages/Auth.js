import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { GAME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const'
import { Context } from '..'
import { login, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import SwimMes from '../components/SwimMes'

const  Auth = observer(() => {
  const location = useLocation()
  const navigate  = useNavigate ()
  const isLogin = location.pathname === LOGIN_ROUTE

  const [popups, setPopups] = useState([]);

  const {user} = useContext(Context)
  
    const [loginForm,setLoginForm] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [email,setEmail] = useState('')
    const [file,setFile] = useState('')
    const [code,setCode] = useState('')

  const click = async () =>{
    try {
      let data;
      const formData = new FormData()
      if(isLogin){
        formData.append('login', loginForm)
        formData.append('password', password)
        data = await login(formData)
      }else{
        formData.append('login', loginForm)
        formData.append('password', password)
        formData.append('email', email)
        file ? formData.append('flag', true) : formData.append('flag', false)
        formData.append('file', file)
        formData.append('code', code)
        formData.append('role', 'USER')
        data = await registration(formData)
      }
      user.setUser(data)
      user.setIsAuth(true)
      navigate(GAME_ROUTE)
    } catch (e) {
      const newPopup = { id: Date.now(), data: e.response.data.message };
        setPopups(prevPopups => [...prevPopups, newPopup]);

        // Удаляем всплывающее окно через 5 секунд
        setTimeout(() => {
        setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id));
        }, 5000);
    }
  }
  const selectFile = e => {
    setFile(e.target.files[0])
  }
  return (
    <AuthCon>
      <div style={{maxWidth: 800, flex: '1 1 auto', display: 'flex', flexWrap:'wrap',color:'white',border:'2px solid #2d3340',padding:20}}>
                <h2 style={{ width: '100%', textAlign: 'center' ,}}>{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <form style={{display: 'flex', flexDirection:'column',justifyContent:'center',width: '100%',}}>
                    <label>
                      Логин
                    </label>
                    <input
                        className="inputauth"
                        placeholder={isLogin ? "Введите ваш логин или email..." : "Введите ваш логин..."}
                        value={loginForm}
                        onChange={e => setLoginForm(e.target.value)}
                         />
                        
                    <label>
                      Пароль
                    </label>
                    <input
                        className="inputauth"
                        placeholder="Введите ваш пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    {
                      !isLogin ?
                      <div style={{display:'contents',}}>
                        <label>
                        Подтверждение пароля
                        </label>
                        <input
                            className="inputauth"
                            placeholder="Повторите ваш пароль"
                            type="password"
                            value={confirmPassword}
                          onChange={e => setConfirmPassword(e.target.value)}
                        />
                        <label>
                          Почта
                        </label>
                        <input
                            className="inputauth"
                            placeholder="Введите вашу почту"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label>
                          Изображение профиля
                        </label>
                        <input
                            className="inputauth"
                            type="file"
                            onChange={selectFile}
                        />
                        <label>
                          Код приглашения
                        </label>
                        <input
                            className="inputauth"
                            placeholder="Введите код приглашения"
                            type="text"
                            value={code}
                            onChange={e => setCode(e.target.value)}
                        />
                      </div>
                      :
                      false
                    }
                    <button disabled={
                        isLogin
                      ? 
                        false 
                      : 
                        (
                          loginForm.length >= 4
                          ?
                              (password === confirmPassword 
                            ? 
                              (
                                email
                                ?
                                false
                                :
                                true
                              ) 
                            : 
                              true)
                          :
                          true
                        )
                      } type="button" className="ButSubAuth" onClick={click}>
                            {isLogin 
                            ? 
                              'Войти' 
                            : 
                              (loginForm.length >= 4 
                                ?
                                (password.length >=4 ? 
                                  ( password === confirmPassword 
                                  ? 
                                    (
                                      email
                                      ?
                                      'Зарегистрироваться'
                                      :
                                      'Введите почту'
                                    ) 
                                  : 
                                    'Пароли не совпадают')
                                  :
                                  'Длина пароля меньше 4 символов')
                                :  
                                  'Длина логина меньше 4 символов'
                              )
                            }
                        </button>
                    <div>
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink  className='LinkForm' to={REGISTRATION_ROUTE} type="button">Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink  className='LinkForm' to={LOGIN_ROUTE} type="button">Войдите!</NavLink>
                            </div>
                        }
                    </div>
                </form>
            </div>
            {popups.map(popup => (
        <SwimMes key={popup.id} text={popup.data} />
      ))}
    </AuthCon>
  )
})
export default Auth; 

const AuthCon = styled.div`
  margin-top: 75px;
position: relative;
flex-wrap: wrap;
display: flex;
flex: 1 1 auto;
padding: 20px;
width:100%;
min-height: calc(100vh - 197px);
justify-content: center;
align-items: center;
border-top: 0.5px solid #2d3340;
`

