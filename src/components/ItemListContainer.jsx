// src/components/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProducts } from './asyncMock';  

function ItemListContainer() {
  const { categoryId } = useParams();  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setLoading(true);  
    fetchProducts(categoryId).then((data) => {
      setProducts(data);
      setLoading(false); 
    });
  }, [categoryId]);  

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div>
      <h1>{categoryId ? `Productos de la categoría: ${categoryId === 'upper' ? 'Partes Superiores' : categoryId === 'lower' ? 'Partes Inferiores' : 'Zapatillas'}` : 'Todos los productos'}</h1>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',           
        justifyContent: 'space-around',  
        gap: '20px',                
        padding: '20px'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '15px',
            margin: '10px',
            width: '250px',
            boxSizing: 'border-box',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
          }}>
            {}
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
            <h2>{product.name}</h2>
            <p><strong>Precio:</strong> ${product.price}</p>
            <p>{product.description}</p>

            {}
            <Link to={`/item/${product.id}`}>
              <button style={{
                padding: '10px 15px',
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
                textDecoration: 'none'
              }}>
                Ver Más
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
