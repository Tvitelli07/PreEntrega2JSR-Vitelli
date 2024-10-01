// src/components/ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from './asyncMock';  

function ItemDetailContainer() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setLoading(true);
    fetchProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);  

  if (loading) {
    return <div>Cargando detalles del producto...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
    }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '500px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
      <h1>{product.name}</h1>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ItemDetailContainer;
