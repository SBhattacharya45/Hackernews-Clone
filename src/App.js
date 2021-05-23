import React from "react";
import { Helmet } from 'react-helmet';
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PostsContainer from './Components/PostsContainer/PostsContainer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>HackerNews Clone</title>
      </Helmet>
      <Header />
      <PostsContainer />
      <Footer />
    </div>
  );
}

export default App;
