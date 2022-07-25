import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Mortgage from '../Mortgage/Mortgage';
import Title from '../Title/Title';
import MortgageBody from '../MortgageBody/MortgageBody';
import Slideshow from '../Slideshow/Slideshow';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/"
        element={
          <>
            <div><Navbar/></div>
            <div><Slideshow /></div>
          </>
        }
        />
        
        <Route path="/mortgage"
        element={
          <>
            <div><Navbar /></div>
            <div><Title prop={'Mortgage Calculator'}/></div>
            <div><MortgageBody /></div>
            <div><Mortgage /></div>
          </>
        }
        />

        <Route path="/learn" element={
          <>
            <div><Navbar /></div>
            <div><Title prop={'Learn'}/></div> 
          </>
        }
        />

        <Route path="/graphs" element={
          <>
            <div><Navbar /></div>
            <div><Title prop={'Graphs'}/></div>  
          </>
        } 
        />

        <Route path="/about" element={
          <>
            <div><Navbar /></div>
            <div><Title prop={'About'}/></div>  
          </>
        } 
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
