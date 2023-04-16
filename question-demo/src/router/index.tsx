import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import List from '../pages/manage/List'
import Star from '../pages/manage/Star'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import Edit from '../pages/question/Edit'
import Stat from '../pages/question/Stat'
import Trash from '../pages/manage/Trash'
import MainLayout from '../layouts/MainLayout'
import ManageLayout from '../layouts/ManageLayout'
import QuestionLayout from '../layouts/QuestionLayout'

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
