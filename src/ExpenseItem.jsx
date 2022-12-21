import React, {useState} from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const ExpenseItem = ({ expenses, dispatch, handleDelete, expense }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {" "}
      {isEditing ? (
        <EditBudget setIsEditing={setIsEditing} expenses={expenses} dispatch={dispatch} expense={expense}/>
      ) : (
        
        <ViewBudget
          handleDelete={handleDelete}
          setIsEditing={setIsEditing}
          expense={expense}
        />
      )}
    </div>
  );
};

export default ExpenseItem;
