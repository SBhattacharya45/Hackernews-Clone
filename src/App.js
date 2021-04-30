import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import './App.css';

import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
