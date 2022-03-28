import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Form from './components/form/Form';
import Header from './components/header/Header';
function App() {
  return (
    <div className='App'>
    <Header />
    <Form/>
    </div>
  );
}
 
export default App;
