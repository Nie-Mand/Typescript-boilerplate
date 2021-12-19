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
    path: '/signup',
    component: lazy(() => import('./pages/signup')),
    shouldBeloggedIn: false,
  },
  {
    path: '/hi',
    component: lazy(() => import('./pages/welcome')),
    shouldBeloggedIn: true,
  },
  {
    path: '/settings',
    component: lazy(() => import('./pages/settings')),
    shouldBeloggedIn: true,
  },
  {
    path: '*',
    component: lazy(() => import('./pages/lost')),
    shouldBeloggedIn: false,
  },
]
