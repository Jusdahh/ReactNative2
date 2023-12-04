import React, {createContext, useState, useContext, useEffect} from 'react';
import axios from 'axios';

const ProductContext = createContext({});

function ProductProvider({children}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <ProductContext.Provider value={{products, loading}}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export {ProductProvider, useProducts};
