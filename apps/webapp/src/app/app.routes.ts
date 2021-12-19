import { lazy } from 'react'

export default [
  {
    path: '/',
    component: lazy(() => import('./pages/home')),
    shouldBeloggedIn: false,
  },
  {
    path: '/login',
    component: lazy(() => import('./pages/login')),
    shouldBeloggedIn: false,
  },
  {
    path: '*',
    component: lazy(() => import('./pages/lost')),
    shouldBeloggedIn: false,
  },
]
