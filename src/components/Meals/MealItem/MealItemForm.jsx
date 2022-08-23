import React, { useRef, useState } from 'react'
import { Input } from '../../UI/Input'
import styles from './MealItemForm.module.css'

export const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false)
      return
    }

    props.addToCart(Number(enteredAmount))
  }

  const amountInputRef = useRef(null)

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  )
}
