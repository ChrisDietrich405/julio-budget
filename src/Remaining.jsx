import React, {useContext} from 'react'
import { BudgetContext } from './BudgetContext'

const Remaining = () => {
  const { expenses, budget } = useContext(BudgetContext)
  
  const totalExpenses = expenses.reduce((total, item) => {
    return total += item.cost
  }, 0)

  const remaining = budget - totalExpenses
  
  return (
    <div>Remaining: ${remaining}</div>
  )
}

export default Remaining