import { createContext, useReducer } from "react";

const initialState = {
  budget: 3000,
  expenses: [
    { name: "shoes", cost: 22, id: 1 },
    { name: "shirt", cost: 220, id: 2 },
    { name: "hat", cost: 12, id: 3 },
  ],
};

const BudgetReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "EDIT_EXPENSE":
        return {
            ...state,
            expenses: [action.payload, ...state.expenses]
        }
    default:
      return state;
  }
};

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BudgetReducer, initialState);
  return (
    <BudgetContext.Provider
      value={{ dispatch, budget: state.budget, expenses: state.expenses }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
