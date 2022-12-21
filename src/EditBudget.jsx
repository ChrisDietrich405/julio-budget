import React, { useState } from 'react'

const EditBudget = ({dispatch, expenses, expense, setIsEditing}) => {
    const [editValue, setEditValue] = useState(expense.name)

    const confirmEdit = () => {
        const newValue = {...expense, name: editValue}
        dispatch({type: "EDIT_EXPENSE", payload: newValue})
        setIsEditing(false)
    }

  return (
    <div>
        <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
        <button onClick={confirmEdit}>confirm edit</button>
    </div>
  )
}

export default EditBudget