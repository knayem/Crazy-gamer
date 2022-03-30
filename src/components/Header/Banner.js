import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Banner = () => {
    return (
        <section id="banner">
      <div className="banner-text">


     

         <h1>Buy & Explore</h1>
        <p>
         
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus illum aliquid minima nostrum, aut, neque libero repellat accusantium obcaecati molestiae ducimus quibusdam aspernatur sapiente fuga nihil commodi recusandae. Distinctio!
        </p> 
        <Button style={{ marginTop: '2px' }} variant="primary"  >Buy Now <FontAwesomeIcon icon={faArrowRight} /></Button>
        
     
      </div>
    </section>
    );
};

export default Banner;