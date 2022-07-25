import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Mortgage from '../Mortgage/Mortgage';
import Title from '../Title/Title';
import MortgageBody from '../MortgageBody/MortgageBody';
import Slideshow from '../Slideshow/Slideshow';
import Api from '../Api/Api';
import FormTable from '../FormTable/FormTable';

interface Data {
  dataset: string;
  id: number;
  home_price: string
  price_meter: number,
};

const data1: Data[] =[
  {
    dataset: "GTA Property Price",
    id: 1,
    home_price: '$799,000',
    price_meter: 0.799,
  },
  {
    dataset: "GTA Property Price",
    id: 2,
    home_price: "$989,000",
    price_meter: 0.989,
  },
  {
    dataset: "GTA Property Price",
    id: 3,
    home_price: "$999,900",
    price_meter: 1.001,
  },
];


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
            <div><Api /></div>
            <div><FormTable props={data1}/></div>
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
