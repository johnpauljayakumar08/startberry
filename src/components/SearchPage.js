import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
const SearchPage = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
    fetchProducts();
  }, []);
const fetchProducts = () => {
    axios
      .get('https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=10')
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return (
        <div>
            <h1>Property for Sale</h1>
            <div  id='salse'className='item-container'>
                {products.map((product) => (
                <div className='product' key={product.id}>
                    <img src={product.Images[0].formats.thumbnail.url} alt='' />
                
                
                    <h4>{product.Title}</h4>
                    <p>{product.Bedrooms} Bedrooms {product.Building_Type} for Rent </p>
                    <h3>{product.Price} &euro;</h3>
                    <Link to={`/detailsPage/${product.id}`}>View</Link>
                </div>
                ))}
            </div>
        </div>
        
    
    );
}
    


export default SearchPage;