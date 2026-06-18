import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { cartItems } = useCart()
  const token = localStorage.getItem('token')

  function logout() {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      <Link to="/cart">Cart ({cartItems.length})</Link> |{' '}
      {token
        ? <button onClick={logout}>Logout</button>
        : <><Link to="/login">Login</Link> | <Link to="/register">Register</Link></>
      }
    </nav>
  )
}
