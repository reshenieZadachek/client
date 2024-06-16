import React, { useContext } from 'react'
//import styled from 'styled-components'
import {Routes, Route, Navigate} from 'react-router-dom'
import { adminRoutes, authRoutes, learnRouteFirst, learnRouteSecond, learnRouteThird, publicRoutes } from '../routes'
import { GAME_ROUTE } from '../utils/const'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'


const  AppRouter = observer(() => {
    const {user} = useContext(Context)
  return (
    <Routes>
        {(user.isAuth & user.User.role === 'ADMIN') && adminRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element = {<Component />} />
        )}
        {(user.isAuth & user.User.room >= 1) && learnRouteFirst.map(({path, Component}) => 
            <Route key={path} path={path} element = {<Component />} />
        )}
        {(user.isAuth & user.User.roomlvl >= 2) && learnRouteSecond.map(({path, Component}) => 
            <Route key={path} path={path} element = {<Component />} />
        )}
        {(user.isAuth & user.User.roomlvl >= 3) && learnRouteThird.map(({path, Component}) => 
            <Route key={path} path={path} element = {<Component />} />
        )}
        {user.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element = {<Component />} />
        )}
        {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element = {<Component />} />)
        }
        <Route path="*" element={ <Navigate to={GAME_ROUTE} replace={true} /> } />
    </Routes>
  )
})
export default AppRouter; 
