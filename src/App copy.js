import React, { Component,useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Comonents/Navbar/Navbar";
import RightNavbar from "./Comonents/RightNavbar/RightNavbar";
import Container from "./Comonents/Container/Container";
import { useKeycloak } from '@react-keycloak/web'


import "./styles/App.css";
import NavContext from "./Context/NavContext";





function App() {
    const [nav, setNav] = useState(false);
    const value = { nav, setNav };
    const { keycloak } = useKeycloak();
    if (keycloak.authenticated ) {
        return (
            <div className='App'>       
            <NavContext.Provider value={value}>
            <Navbar />
            <Container
          stickyNav={<RightNavbar />}
          content={
            <Routes>
             <Route path="*" element={<main>NOT FOUND</main>} />
             
            </Routes>
          }
        />            
            
            </NavContext.Provider>
            </div>
        )        
      } else {
            return <div>Ready to initialize</div>
       }
    
}

export default App;