import routes from './app.routes'
import { Routes, Route } from 'react-router-dom'
import { useGetMe, useIsAuth } from './redux/hooks/auth.hooks'

export default () => {
  const isAuth = useIsAuth()
  useGetMe()

  return (
    <Routes>
      {routes.map(({ path, component: Component, shouldBeloggedIn }: any) =>
        !shouldBeloggedIn || (isAuth && shouldBeloggedIn) ? (
          <Route key={path} path={path} element={<Component />} />
        ) : null
      )}
    </Routes>
  )
}
