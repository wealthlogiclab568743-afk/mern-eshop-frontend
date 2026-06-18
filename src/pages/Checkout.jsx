import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { cartItems, total, clearCart } = useCart()
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const token = localStorage.getItem('token')
    try {
      await axios.post('/api/orders', { items: cartItems, total, address }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      clearCart()
      navigate('/order-confirm')
    } catch (err) {
      alert(err.response?.data?.message || 'Order failed')
    }
  }

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total: ${total.toFixed(2)}</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Shipping address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  )
}
