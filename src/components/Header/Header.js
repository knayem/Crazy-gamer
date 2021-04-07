import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Navbar, Container,NavDropdown,FormControl ,Form,Nav,Button  } from 'react-bootstrap';

const Header = () => {
    return (
        <div  className="header navbar navbar-expand-lg navbar-light navbar-toggler align-items-center justify-content-around">
            

            <Navbar bg="success" expand="lg">         
   <h3 style={{textSize:'300px', color:'white'}}>Crazy Gamer</h3> 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
   <div style={{marginRight:'5%'}}>
    <Nav style={{ color: 'white'}} className="mr-auto">
    <Link to="/home"><h2>Home</h2></Link>
        <Link to="/showProduct/1"> <h1>Order</h1> </Link>
        <Link to="/admin"><h2>Admin</h2> </Link>
        <Link to="/deals"><h1>Deals</h1></Link>
        <Link to="/products"><h2>Products</h2></Link>
        <Link to="/login"><h1>Login</h1></Link>

        
    </Nav>
    </div>
   
  </Navbar.Collapse>
</Navbar>



        {/* <Navbar style={{ color: 'black'}} expand="lg" variant="light" bg="success align-items-center justify-content-around ">
     <Container>
     <h4 >Jersey Hut</h4>

     <Navbar.Brand href="#">Home</Navbar.Brand>
     <Navbar.Brand href="#">Order</Navbar.Brand>
     <Navbar.Brand href="#">Admin</Navbar.Brand>
     <Navbar.Brand href="#">Login</Navbar.Brand> */}

       

     {/* <Link to="/home">Home</Link>
        <Link to="/order/1">Order</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/deals">Deals</Link>
        <Link to="/login">Login</Link> */}
    {/* </Container>
     </Navbar> */}
        </div>
    );
};

export default Header;