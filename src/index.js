import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import User from './combonents/User';
import Food from './combonents/Food';
import Home from './combonents/home'
import Services from './combonents/Services';
import Login from './combonents/Login';
import Regestor from './combonents/Regestor';
import Clothes from "./combonents/Clothes";
import ElectricDev from './combonents/ElectricDev';
import AddFood from './combonents/AddFood';
import AddClothes from './combonents/AddClothes';
import AddDevice from './combonents/AddDevice';
import Story from './combonents/Story';
import "./App.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      
      <Route path="User" element={<User />} />
      <Route path="/" element={<App />}>
      <Route path="Home" element={<Home />} />
        {/* <Route path="Finesh" element={<Finesh/>}/> */}
        <Route path="User" element={<User />} />
        <Route path="Services" element={<Services />} >
          <Route path="food" element={<Food />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="ElectricDev" element={<ElectricDev />} />
        </Route>
        {/* <Route path="story" element={<Story/>}/> */}
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Regestor" element={<Regestor />} />
        <Route path="AddFood" element={<AddFood />} />
        <Route path="AddClothes" element={<AddClothes />} />
        <Route path="AddDevice" element={<AddDevice />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
  , document.getElementById('root'));

