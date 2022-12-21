import React, { useState, useEffect } from "react";
import Input from "@mui/material/Input";
import FormControlUnstyled from "@mui/base/FormControlUnstyled";
import Container from "@mui/material/Container";

const FilteredSearch = ({ expenses, setFilteredExpenses }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    const searchedItem = expenses.filter((expense) =>
      expense.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredExpenses(searchedItem);
  };

  useEffect(() => {
    handleSearch();
  }, [expenses, searchValue]);

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Input
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Container>
  );
};

export default FilteredSearch;
