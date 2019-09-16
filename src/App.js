import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Routes from './config/routes'
import Header from './template/header'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
      
  );
}

export default App;
