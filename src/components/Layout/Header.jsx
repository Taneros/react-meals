import React from 'react'
import styles from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import { HeaderCartButton } from './HeaderCartButton'

export const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="Delicious Food" />
      </div>
    </>
  )
}
