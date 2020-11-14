import React from "react";
import { Grid } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import NewBet from "./NewBet.js";

function App() {
  return (

  <Div>
    <NewBet />



    <Grid container direction="column">
      <Grid item>
        <Header style = {{backgroundColor: "#ED1C24"}} />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
    </Div>
  );
}

export default App;
