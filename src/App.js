import './App.css';
import './mobile.css';
import {BrowserRouter} from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { Context } from './index';
import { check } from './http/userAPI';
import TextAnimation from './components/TextAnimations';

const Footer =  lazy(() => import('./components/FOOTER/Footer'));
const Headers =  lazy(() => import('./components/HEADER/Header'));
const AppRouter =  lazy(() => import('./components/AppRouter'));
const Spinner =  lazy(() => import('react-bootstrap/Spinner'));

const Layout = ({children}) =>{
  return(
    <>
    <Headers />
      {children}
      <Footer />
    </>
  )
}
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
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Headers />
          <Spinner style={style} animation="border" role="status"><TextAnimation/></Spinner>
          <Footer />
        </BrowserRouter>
      </Suspense>
    )
  }
  if (user.User.isBanned){
    return(
      <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>

            <Spinner style={style1} animation="border" role="status"><span>ВЫ БЫЛИ ЗАБАНЕНЫ</span></Spinner>

          </BrowserRouter>
      </Suspense>
    )
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
});

export default App;
