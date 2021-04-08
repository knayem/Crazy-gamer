import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { Card } from 'react-bootstrap';
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
            <h2>Your :{order.length} Orders</h2>
          
            {
                order.map(order => <ul>
                    
                    <Card>
  <Card.Body> <h3>{order.name}</h3> <h4>Season: {order.season}</h4> <h5>Price:{order.price}$. Quantity:{order.quantity}.</h5>
  <h4>Buyer's Email:{order.email}</h4> <h3>Order at:{order.orderTime}</h3> </Card.Body>

</Card>

                    

                </ul>)


            }




        </div>
    );
};

export default OrderInfo;