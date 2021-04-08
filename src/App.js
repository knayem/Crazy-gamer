
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CheckOut from './components/CheckOut/CheckOut';
import Deals from './components/Deals/Deals';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
//import Products from './components/Products/Products';
import React, { createContext, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (




    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>


    


      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

         
          <PrivateRoute path="/showProduct/:season">
            <CheckOut />
          </PrivateRoute >
        
          <PrivateRoute path="/order">
            <Order />
            </PrivateRoute>

          <Route path="/deals">
            <Deals />
          </Route>

          <Route path="/login">
            <Login />
          </Route>



        </Switch>

      </Router>

    </UserContext.Provider>
  );
}

















//     <div className="App">


//       <Router>
//         <Header></Header>
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/home">
//             <Home></Home>
//           </Route>

//           <Route path="/admin">
//             <Admin />
//           </Route>

//           <Route path="/showProduct/:season">
//             <Order />
//           </Route>



//           <Route path="/order">
//             <Order />
//           </Route>

//           {/* <Route path="*">
//             <NoMatch/>
//           </Route>  */}

//           {/* <Route path="/products">
//             <Products/>
//           </Route> */}
//           <Route path="/deals">
//             <Deals />
//           </Route>

//           <Route path="/login">
//             <Login />
//           </Route>


//         </Switch>

//       </Router>

//     </div>
//   );
// }

export default App;
