import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'

export const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((acc, val) => {
    return acc + val.amount
  }, 0)
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}
