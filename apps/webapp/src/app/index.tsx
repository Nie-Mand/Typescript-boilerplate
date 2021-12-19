import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { Loading } from '@ui'
import Provider from './redux/provider'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Routes from './Routes'
export function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Provider>
        <div className="bg-slate-100">
          <Toaster />
          <Navbar />
          <main className="max-x-full prose prose-headings:m-0 prose-img:mt-0 prose-p:my-0">
            <Routes />
          </main>
          <Footer />
        </div>
      </Provider>
    </Suspense>
  )
}

export default App
