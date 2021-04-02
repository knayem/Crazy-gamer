import React, { useEffect, useState } from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';
import logo from '../../images/fifa.jpg';

import * as ReactBootStrap from 'react-bootstrap';
const Home = () => {

 const [products, setProducts] =useState([]);
 const [loadings, setLoadings] = useState([]);
 console.log(products);
     useEffect(() => {



        fetch('http://localhost:5055/product')
        .then(res => res.json())
        .then(data => setProducts(data))
         

     }, [])
  

    return (
        <div style={{ backgroundImage: `url(${logo})`, height: '1400px'}}>
            {

          
           products.map(product => <ShowProducts product={product} ></ShowProducts> )

           
      
            }
                 {loadings.length ===0 &&  <ReactBootStrap.Spinner animation="border" variant="warning" /> }  

            
             {/* <ReactBootStrap.Spinner animation="border" variant="warning" /> */}

           

        </div>
    );
};

export default Home;