import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Hero from "../src/components/Hero/Hero";

function App() {
  
  return (
    <>
       <StyledEngineProvider injectFirst> 
         <Navbar/>
         {/* <Outlet /> */}
         <Hero/>   
       </StyledEngineProvider>
    </>
  );
}

export default App;
