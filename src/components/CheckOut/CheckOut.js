
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Table, } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderInfo from '../OrderInfo/OrderInfo';
//import {getDatabaseCart} from '../../utilities/databaseManager';
const CheckOut = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const { season } = useParams();
  const [details, setDetails] = useState({});
  console.log(season);

  useEffect(() => {

    fetch('https://intense-everglades-88181.herokuapp.com/product/' + season)
      .then(res => res.json())
      .then(data => setDetails(data));

  }, [])

  const email = loggedInUser.email;
  const names = loggedInUser.name;
  const { quantity, price, name } = details
  const handleCheckOut = () => {

    console.log('submitted')
    const newOrder = { email, names, price, quantity, name, orderTime: new Date() };
    console.log(newOrder);
    fetch('https://intense-everglades-88181.herokuapp.com/addOrder', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newOrder)
    })

      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.value === null) {

          alert('please select some product')
        }

        else if (data) {

          alert(' Your Order Have Placed Successfully')
        }

      });


  };

  // const item = details && details.find(detail => season == detail.season);

  return (
    <div style={{ marginTop: '3%', marginLeft: '1%' }}>
      <h1>Check Out</h1>
      <hr></hr>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>

            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{details.name}</td>
            <td>{details.quantity}</td>
            <td>{details.price}</td>

          </tr>

          <tr>

            <td colSpan="2">Total</td>
            <td>{details.price}</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={handleCheckOut} style={{ marginTop: '2px' }} variant="primary"  >Check Out</Button>

      <div Style={{ textAlign: 'center' }}>

        {/* <OrderInfo></OrderInfo> */}
      </div>

    </div>
  );
};

export default CheckOut;