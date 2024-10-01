import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      width: '100%',              
      backgroundColor: '#567',    
      padding: '10px 20px',       
      position: 'fixed',          
      top: 0,                     
      zIndex: 1000,               
      display: 'flex',            
      justifyContent: 'space-between', 
      alignItems: 'center'        
    }}>
      {}
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GcHhdBU8bSNURzyHXSuTRezGcXi6q2hGCA&s"   
          alt="Logo" 
          style={{ height: '40px', width: '50px' }} 
        />
      </Link>

      {}
      <div style={{ flexGrow: 1 }}></div>

      {}
      <ul style={{
        listStyleType: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
        justifyContent: 'center', 
        alignItems: 'center',
        flexGrow: 1                
      }}>
        <li>
          <Link to="/category/upper" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem' }}>
            Partes Superiores
          </Link>
        </li>
        <li>
          <Link to="/category/lower" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem' }}>
            Partes Inferiores
          </Link>
        </li>
        <li>
          <Link to="/category/shoes" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem' }}>
            Zapatillas
          </Link>
        </li>
      </ul>

      {}
      <div style={{ flexGrow: 1 }}></div>
    </nav>
  );
}

export default Navbar;
