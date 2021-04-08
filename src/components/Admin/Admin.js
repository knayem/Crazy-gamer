import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import Products from '../Products/Products';
import ManageProduct from '../ManageProduct/ManageProduct';
import EditProduct from '../EditProduct/EditProduct';
import logo from '../../images/admin.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Admin = () => {
    return (
        <div style={{ backgroundImage: `url(${logo})`, height: '400px' }} >
            
            <Router>
            <AdminHeader></AdminHeader>
        <Switch>
          <Route exact path="/">
          <ManageProduct/>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct/>
          </Route>

          <Route path="/addProduct">
            <Products></Products>
          </Route>

          <Route path="/editProduct">
          <EditProduct/>
            
          </Route>
           


        </Switch>

      </Router>
           
        </div>
    );
};

export default Admin;


