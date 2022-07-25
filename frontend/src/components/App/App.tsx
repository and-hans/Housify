import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Mortgage from '../Mortgage/Mortgage';
import Title from '../Title/Title';
import MortgageBody from '../MortgageBody/MortgageBody';

const App: React.FC = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div><Title prop={'Mortgage Calculator'}/></div>
      <div><MortgageBody /></div>
      <div><Mortgage /></div>
    </div>
  );
}

export default App;
