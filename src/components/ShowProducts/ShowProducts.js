
import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const ShowProducts = (props) => {


  const { name, price, season, quantity, imageURL } = props.product;
  const productStyle = { background_color: ' rgb(47, 4, 88)', float: 'left ', padding: '15px' }
  return (
    <div id="div-position" style={productStyle} className="league d-flex align-items-center
         justify-content-around  ">
      <Card className="home-card" style={{ width: '26rem', height: '320px', backgroundColor: 'whitesmoke' }}>
        <Card.Img style={{ width: '100%', height: '210px' }} variant="top" src={imageURL} />
        <Card.Body>
          <Card.Text>
            <h2 style={{ color: 'navy', textAlign: 'center' }}>  {name} <span style={{ color: 'red'}}> {price}$</span> </h2>
            {/* <h6 className="league-type" style={{ color: 'blue' }}> price: {price}$</h6> */}
             <Link to={`/showProduct/${season}`}>
            
              <Button style={{ marginTop: '2px' }} variant="primary"  >Buy Now <FontAwesomeIcon icon={faShoppingCart} /></Button>
              </Link> 
          </Card.Text>

        </Card.Body>
      </Card>


    </div>
  );
};

export default ShowProducts;