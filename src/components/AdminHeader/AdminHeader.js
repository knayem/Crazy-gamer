import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container,NavDropdown,Navbar,Nav ,Form,FormControl } from 'react-bootstrap';
const AdminHeader = () => {
    return (
        <div>
             <Navbar bg="light" expand="lg">
  <Navbar.Brand style={{fontSize:'40px'}} >Admin</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
       

        <Link to="/manageProduct">Manage Product</Link>
        <br/>
        <br/>
        <Link to="/addProduct">Add Product</Link>
        <br/>
        <br/>
        <Link to="/editProduct">Edit Product</Link>
       



        
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
            
        </div>
    );
};

export default AdminHeader;