import React from "react";
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PostsContainer from './Components/PostsContainer/PostsContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <PostsContainer />
      <Footer />
    </div>
  );
}

export default App;
