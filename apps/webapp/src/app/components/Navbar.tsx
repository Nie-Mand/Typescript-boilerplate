import { Link } from 'react-router-dom'
import { Button, If } from '@ui'
import { useIsAuth, useLogout } from '../redux/hooks/auth.hooks'

const Navbar = () => {
  const isAuth = useIsAuth()
  const handleLogout = useLogout()

  return (
    <nav className="navbar">
      <Link to="/" className="mr-auto">
        <img src="/assets/logo.png" alt="Logo" className="w-12" />
      </Link>

      <If condition={!isAuth}>
        <Link to="/login" className="font-semibold">
          Login
        </Link>
        <Button href="/signup" as="link">
          Signup
        </Button>
      </If>

      <If condition={isAuth}>
        <Button
          className="!bg-red-600 !text-white focus:!outline-red-500"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </If>
    </nav>
  )
}

export default Navbar
