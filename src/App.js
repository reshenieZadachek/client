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

  useEffect(() => {
      check().then(data => {
        if(!data){
          alert('Я тут')
        }
        else{
          user.setUser(data)
          user.setIsAuth(true)
        }
      }).finally(() => {setLoading(false)}
      )      
    
  }, [])
  if (loading){
    return(
      <Spinner animation="border" role="status"><span>Loading...</span></Spinner>
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
