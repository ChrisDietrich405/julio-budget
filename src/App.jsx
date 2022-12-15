import React from 'react'
import Budget from './Budget'
import "./App.css"
import Expenses from './Expenses'

const App = () => {
  return (
    <div className="container">
      <div><Budget/></div>
      <div>Remaining</div>
      <div>Spent</div>
      <div><Expenses/></div>
    </div>
  )
}

export default App