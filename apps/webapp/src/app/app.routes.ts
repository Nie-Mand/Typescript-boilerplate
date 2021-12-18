import { lazy } from 'react'

export default [
  {
    path: '/',
    component: lazy(() => import('./pages/home')),
    shouldBeloggedIn: false,
  },
  {
    path: '*',
    component: lazy(() => import('./pages/lost')),
    shouldBeloggedIn: false,
  },
]
