import { Link } from 'react-router-dom'
import { Button } from '@ui'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="mr-auto">
        <img src="/assets/logo.png" alt="Logo" className="w-12" />
      </Link>

      <Link to="/login" className="font-semibold">
        Login
      </Link>

      <Button href="/signup">Signup</Button>
    </nav>
  )
}

export default Navbar
