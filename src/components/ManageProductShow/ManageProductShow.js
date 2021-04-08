import React from 'react';
import { Button, Table, } from 'react-bootstrap';
const ManageProductShow = (props) => {
    const { name, price, season,_id } = props.item;

   
     const deleteProduct= id => {
       console.log(id);
      fetch(`https://intense-everglades-88181.herokuapp.com/deleteProduct/${id} `,{

         method: 'DELETE',

      })
  
      .then(res => res.json())
      
      .then(result => {
  
    console.log('deleted product successfully')

      })
        
   


  



   }



    return (
        <div>

<Table style={{backgroundColor: 'white'}} striped bordered hover size="sm">
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
           
            <td> <Button onClick={() => deleteProduct(_id) } variant="info">Delete</Button></td>  

          </tr>
          {/* onClick={() => deleteProduct(_id) } */}
          
        </tbody>
      </Table> 

            
        </div>
    );
};

export default ManageProductShow;