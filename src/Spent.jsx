import React, { useContext } from 'react'
import { BudgetContext } from './BudgetContext'

const Spent = () => {
  const { expenses } = useContext(BudgetContext)
  
  const totalExpenses = expenses.reduce((total, item) => {
    return total += item.cost
  }, 0)
  
  return (
    <div>Spent: ${totalExpenses}</div>
  )
}

export default Spent