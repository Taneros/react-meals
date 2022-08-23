import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'

export const HeaderCartButton = ({ onClick }) => {
  const [btnIsActive, setBtnIsActive] = useState(false)

  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((acc, val) => {
    return acc + val.amount
  }, 0)

  const btnClasses = `${styles.button} ${btnIsActive ? styles.bump : ''}`

  useEffect(() => {
    if (cartCtx.items.length === 0) return

    setBtnIsActive(true)
    const removeActiveTimeout = setTimeout(() => setBtnIsActive(false), 290)

    return () => {
      clearTimeout(removeActiveTimeout)
    }
  }, [cartCtx.items])

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}
