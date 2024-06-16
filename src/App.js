import './App.css';
import './mobile.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import Headers from './components/HEADER/Header';
import Footer from './components/FOOTER/Footer';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from './index';
import { check } from './http/userAPI';
import Spinner from 'react-bootstrap/Spinner';
import TextAnimation from './components/TextAnimations';

const App = observer(() => {
  const {user} = useContext(Context)
  console.log(user.User);
  const [loading,setLoading] = useState(true)
  const style = {
    position: 'relative',
    flexWrap: 'wrap',
    display: 'flex',
    flex: '1 1 auto',
    paddingTop:'10px',
    width:'100%',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 197px)',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '0.5px solid #2d3340',
  }
  const style1 = {
    position: 'relative',
    flexWrap: 'wrap',
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '30pt',
  }
  useEffect(() => {
      check().then(data => {
        if(data){
          user.setUser(data)
          user.setIsAuth(true)
        }
      }).finally(() => {
        setLoading(false)}
      )      
    
  }, [])
  if (loading){
    return(
      <BrowserRouter>
        <Headers />
        <Spinner style={style} animation="border" role="status"><TextAnimation/></Spinner>
        <Footer />
      </BrowserRouter>
    )
  }
  if (user.User.isBanned){
    return(
      <BrowserRouter>

        <Spinner style={style1} animation="border" role="status"><span>ВЫ БЫЛИ ЗАБАНЕНЫ</span></Spinner>

      </BrowserRouter>
    )
  }
  return (
    <BrowserRouter>
      <Headers />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
