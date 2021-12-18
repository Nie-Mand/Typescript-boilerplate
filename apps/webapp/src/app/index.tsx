import { Suspense } from 'react'
import routes from './app.routes'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Loading } from '@ui'
import Provider from './redux/provider'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export function App() {
  const isAuth = false

  return (
    <Suspense fallback={<Loading />}>
      <Provider>
        <Toaster />
        <Navbar />
        <main className="prose">
          <Routes>
            {routes.map(
              ({ path, component: Component, shouldBeloggedIn }: any) =>
                !shouldBeloggedIn || (isAuth && shouldBeloggedIn) ? (
                  <Route key={path} path={path} element={<Component />} />
                ) : null
            )}
          </Routes>
          <Footer />
        </main>
      </Provider>
    </Suspense>
  )
}

export default App
