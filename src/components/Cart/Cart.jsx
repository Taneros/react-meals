import React, { useContext } from 'react'
import styles from './Cart.module.css'
import { Modal } from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

export const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item)
  }

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, { ...item, amount: 1 })}
        />
      ))}
    </ul>
  )

  return (
    <Modal onClick={onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        <button disabled={!hasItems} className={styles.button}>
          Order
        </button>
      </div>
    </Modal>
  )
}
