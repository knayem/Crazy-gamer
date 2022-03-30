import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Navbar, Container,NavDropdown,FormControl ,Form,Nav,Button  } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div  className="header navbar navbar-expand-lg navbar-light navbar-toggler align-items-center justify-content-around">
            

            <Navbar expand="lg" class="d-flex justify-content-around">         
   <h3 style={{textSize:'300px', color:'white'}}>Crazy Gamer</h3> 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
   <div style={{marginRight:'5%'}}  >
    <Nav style={{padding:'20px'}} className="mr-auto ">
    <Link to="/home"><h1>Home</h1></Link>
       
        <Link to="/order"><h2>Order</h2></Link>
        <Link to="/admin"><h1>Admin</h1> </Link>
        <Link to="/deals"><h2>Deals</h2></Link>
         <Link to="/login"><h1  >Login</h1></Link>
         <p style={{ color: 'yellow'}}>{loggedInUser.name || loggedInUser.displayName || loggedInUser.email}</p>
    </Nav>
    </div>
   
  </Navbar.Collapse>
</Navbar>


        </div>
    );
};

export default Header;