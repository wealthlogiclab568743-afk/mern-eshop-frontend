import { Link } from 'react-router-dom'

export default function OrderConfirm() {
  return (
    <div>
      <h1>Order Placed!</h1>
      <p>Thank you for your purchase.</p>
      <Link to="/">Continue Shopping</Link>
    </div>
  )
}
