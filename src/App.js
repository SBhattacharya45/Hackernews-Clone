import React from "react";
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Posts from './Components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
