import React, { useEffect, useState } from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';
import logo from '../../images/fifa.jpg';

import * as ReactBootStrap from 'react-bootstrap';
const Home = () => {

    const [products, setProducts] = useState([]);

    console.log(products);
    useEffect(() => {



        fetch('https://intense-everglades-88181.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))


    }, [])


    return (
        <div style={{ backgroundImage: `url(${logo})`, height: '1700px' }}>
            {


                products.length === 0 && <ReactBootStrap.Spinner animation="border" variant="warning" />
            }


            {


                products.map(product => <ShowProducts product={product} ></ShowProducts>)



            }







        </div>
    );
};

export default Home;