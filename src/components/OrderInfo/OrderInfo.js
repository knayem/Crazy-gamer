import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const OrderInfo = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [order, setOrder] = useState([])
    const email = loggedInUser.email;

    useEffect(() => {

         fetch(`http://localhost:5055/order/${email} `)

       // fetch('http://localhost:5055/order?email' + email)

            .then(res => res.json())
            .then(data => setOrder(data));


    }, [])

    return (
        <div style={{textAlign: 'center'}}>
            <h2>Your Orders</h2>

            {
                order.map(order => <ul>
                    <li>{order.name} </li>
                    <li>Season {order.season}</li>
                    <li>Quantity:{order.quantity}</li>
                    <li> Price:{order.price}$</li>

                    <li>Buyer's Email:{order.email}</li>
                    <li>Order at:{order.orderTime}</li>


                </ul>)


            }




        </div>
    );
};

export default OrderInfo;