import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'

export default function Cart() {
  const { cartItems, total } = useCart()

  if (cartItems.length === 0) return <p>Your cart is empty. <Link to="/">Shop</Link></p>

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map(item => <CartItem key={item._id} item={item} />)}
      <p>Total: ${total.toFixed(2)}</p>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  )
}
