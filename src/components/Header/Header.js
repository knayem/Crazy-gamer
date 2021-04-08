import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Navbar, Container,NavDropdown,FormControl ,Form,Nav,Button  } from 'react-bootstrap';

const Header = () => {
    return (
        <div  className="header navbar navbar-expand-lg navbar-light navbar-toggler align-items-center justify-content-around">
            

            <Navbar bg="dark" expand="lg">         
   <h3 style={{textSize:'300px', color:'white'}}>Crazy Gamer</h3> 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
   <div style={{marginRight:'5%'}}>
    <Nav style={{ color: 'white'}} className="mr-auto">
    <Link to="/home"><h2>Home</h2></Link>
        <Link to="/showProduct/1"> <h1>CheckOut</h1> </Link>
        <Link to="/order"><h2>Order</h2></Link>
        <Link to="/admin"><h2>Admin</h2> </Link>
        <Link to="/deals"><h1>Deals</h1></Link>
        {/* <Link to="/yourOrders"><h2>Your Orders</h2></Link> */}
        <Link to="/login"><h2>Login</h2></Link>

       
    </Nav>
    </div>
   
  </Navbar.Collapse>
</Navbar>


        </div>
    );
};

export default Header;