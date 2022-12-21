import React, {useContext} from 'react'
import { BudgetContext } from './BudgetContext'


const Budget = () => {
  const { budget } = useContext(BudgetContext)
  return (
    <div>Budget: ${budget}</div>
  )
}

export default Budget