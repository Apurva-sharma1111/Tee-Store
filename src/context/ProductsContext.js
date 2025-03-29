import {createContext, useContext, useEffect, useState} from 'react';

const ProductsContext = createContext();

export const useProductsContext = () => {
    return useContext(ProductsContext)
}

export const ProductsProvider = ({children}) => {
    const [prodList, setProdList] = useState([]);
    useEffect(() => {
        fetchProducts();
      }, []);

      async function fetchProducts() {
        try {
          const res = await fetch(
            " https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json "
          );
          const data = await res.json();
          setProdList(data);
        } catch (error) {
          console.log("Something is wrong");
        }
      }
    
    return (
        <ProductsContext.Provider value={{prodList}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;