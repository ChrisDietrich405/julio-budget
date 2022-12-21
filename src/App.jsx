import React from "react";
import Budget from "./Budget";
import "./App.css";
import Expenses from "./Expenses";
import Remaining from "./Remaining";
import Spent from "./Spent";
import { BudgetProvider } from "./BudgetContext";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";

const App = () => {
  const cardStyle = {
    marginBottom: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardContent = {
    marginBottom: 0,
    paddingBottom: 0,
  };

  return (
    <Container>
      <BudgetProvider>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={cardStyle}>
              <CardContent sx={cardContent}>
                <Typography variant="h4">
                  <Budget />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={cardStyle}>
              <CardContent sx={cardContent}>
                <Typography variant="h4">
                  <Remaining />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={cardStyle}>
              <CardContent sx={cardContent}>
                <Typography variant="h4">
                  <Spent />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <div className="expenses-container">
          <Expenses />
        </div>
      </BudgetProvider>
    </Container>
  );
};

export default App;
