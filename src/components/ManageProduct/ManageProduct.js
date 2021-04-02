
import React, { useEffect, useState } from 'react';
import ManageProductShow from '../ManageProductShow/ManageProductShow';

const ManageProduct = () => {


    const [product, setProduct] =useState([]);
    
        useEffect(() => {
   
           fetch('http://localhost:5055/product')
           .then(res => res.json())
           .then(data => setProduct(data))
             }, [])

    return (
        <div>
           {
             

          
product.map(item => <ManageProductShow item ={item} ></ManageProductShow> )

 }
          


            
        </div>
    );
};

export default ManageProduct;