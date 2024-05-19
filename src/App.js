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

const App = observer(() => {
  const {user} = useContext(Context)
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
        <Spinner style={style} animation="border" role="status"><span>Loading...</span></Spinner>
        <Footer />
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
