import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Button } from "@mui/material";
import { firstLetterUpperCase } from "./helpers/string";

const ViewBudget = ({ expense, setIsEditing, handleDelete }) => {
  const cardContent = (
    <CardContent>
      <Typography sx={{ display: "flex", justifyContent: "space-around" }}>
        <span>{firstLetterUpperCase(expense.name)}</span>
        <span>${expense.cost}</span>
      </Typography>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          startIcon={<DeleteIcon />}
          variant="outlined"
          color="primary"
          onClick={() => handleDelete(expense)}
        >
          delete
        </Button>
        <Button
          startIcon={<EditIcon />}
          variant="outlined"
          color="primary"
          onClick={() => setIsEditing(true)}
        >
          edit
        </Button>
      </CardActions>
    </CardContent>
  );

  return <Card variant="outlined">{cardContent}</Card>;
};

export default ViewBudget;
