import React from 'react'

const Expenses = () => {
    const expenses = [
        {item: "shoes", cost: "200", id: "1" },
        {item: "t-shirt", cost: "20", id: "2" },
        {item: "car", cost: "2000", id: "3" },
        {item: "boots", cost: "100", id: "4" }
    ]
  return (
    <div>
        {expenses.map((expense) => {
            return (
                <p>{expense.item}</p>
            )
        })}
    </div>
  )
}

export default Expenses