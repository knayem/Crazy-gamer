import React from 'react';
import { Button, Table, } from 'react-bootstrap';
const ManageProductShow = (props) => {
    const { name, price, season, quantity } = props.item;

   

//    const deleteProduct= id => {
//      fetch(`http://localhost:5055/order/${email} `)
  
//         method: 'DELETE'
   
//    .then(res => res.json())
//    .then( result =>{
// alert('deleted product')

//    })



//    }



    return (
        <div>

<Table striped bordered hover size="sm">
        <thead>
          <tr>

            <th>Description</th>
            <th>Season</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{season}</td>
            <td>{price}</td>
            <td> <Button  variant="info">Delete</Button></td> 
             {/* <td> <Button onClick={() => deleteProduct({_id}) } variant="info">Delete</Button></td>  */}

          </tr>

          
        </tbody>
      </Table> 

            
        </div>
    );
};

export default ManageProductShow;