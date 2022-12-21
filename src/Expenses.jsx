import React, { useContext, useEffect, useState } from "react";
import { BudgetContext } from "./BudgetContext";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import FormControlUnstyled from "@mui/base/FormControlUnstyled";
import Grid from "@mui/material/Grid";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpenseItem from "./ExpenseItem";
import FilteredSearch from "./FilteredSearch";

const Expenses = () => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { expenses, dispatch } = useContext(BudgetContext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  const handleAddExpense = (e) => {
    console.log(dispatch);
    e.preventDefault();

    const additionalExpense = {
      name: expenseName,
      cost: parseInt(expenseCost),
      id: uuidv4(),
    };

    dispatch({ type: "ADD_EXPENSE", payload: additionalExpense });
  };

  const handleDelete = (expense) => {
    dispatch({ type: "DELETE", payload: expense.id });
  };

  return (
    <div>
      <>
        <Container sx={{ display: "flex", justifyContent: "center", marginBottom: 0 }}>
          <FormControlUnstyled
            defaultValue=""
            required
            sx={{ marginBottom: 0 }}
          >
            <Input
              sx={{ marginRight: "20px", marginBottom: 0 }}
              type="text"
              placeholder="name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
            <Input
              sx={{ marginRight: "20px", marginBottom: 0 }}
              type="number"
              placeholder="cost"
              value={expenseCost}
              onChange={(e) => setExpenseCost(e.target.value)}
            />
            <ButtonGroup
              sx={{ marginBottom: 0 }}
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                sx={{ marginBottom: 0 }}
                startIcon={<AccessTimeIcon />}
                variant="outlined"
                color="primary"
                onClick={handleAddExpense}
              >
                add new expense
              </Button>
            </ButtonGroup>
          </FormControlUnstyled>
        </Container>
        <FilteredSearch
          expenses={expenses}
          setFilteredExpenses={setFilteredExpenses}
        />
      </>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredExpenses.map((expense) => {
          return (
            <>
              <Grid item xs={12} md={6} lg={4}>
                <ExpenseItem
                  expenses={expenses}
                  expense={expense}
                  dispatch={dispatch}
                  handleDelete={handleDelete}
                />
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default Expenses;
