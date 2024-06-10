import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import List from '../pages/manage/List'
import Star from '../pages/manage/Star'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import Trash from '../pages/manage/Trash'
import MainLayout from '../layouts/MainLayout'
import ManageLayout from '../layouts/ManageLayout'
import QuestionLayout from '../layouts/QuestionLayout'
// import Edit from '../pages/question/Edit'
// import Stat from '../pages/question/Stat'
const Edit = lazy(() => import(/* webpackChunkName: "editPage" */ '../pages/question/Edit'))
const Stat = lazy(() => import(/* webpackChunkName: "statPage" */ '../pages/question/Stat'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
      {
        path: '*', // 404配置路由 都写在最后兜底
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'stat/:id',
        element: <Stat />,
      },
    ],
  },
])

export default router

// 常用路由
export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGE_INDEX_PATHNAME = '/manage/list'

export const isLoginOrRegister = (pathname: string) => {
  if ([LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)) return true
  return false
}

export const isNeedUserData = (pathname: string) => {
  if ([HOME_PATHNAME, LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)) return true
  return false
}
