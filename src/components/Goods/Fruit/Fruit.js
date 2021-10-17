import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

const Fruit = (props) => {
    const { img, pic, picture, name, previousPrice, recentPrice,handleAddToCart } = props.fruit;
    const currencyUrl = "https://i.ibb.co/vVxw1VL/taka-bangladesh-trade-BDT-512.png";
    const currency = {
        width: '15px',
        marginBottom: '5px'
    }
    return (

                <Col xs={1} md={2} lg={4} className="g-5">
            <div>
            <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
       
      </Card.Text>
      <p>Price : <del><img src={currencyUrl} style={currency} alt="" />{previousPrice}</del> <img src={currencyUrl} style={currency} alt="" />{recentPrice}</p>
            <Button onClick={()=>props.handleAddToCart(props.fruit)} variant="btn btn-warning">Add to cart</Button>
    </Card.Body>
  </Card>
            </div>
  </Col>
            /* <img style={{ width: '200px' }} src={img} alt="" />
            <h5>{name}</h5>
            <p>Price : <del><img src={currencyUrl} style={currency} alt="" />{previousPrice}</del> <img src={currencyUrl} style={currency} alt="" />{recentPrice}</p>
            <Button onClick={()=>props.handleAddToCart(props.fruit)} variant="btn btn-warning">Add to cart</Button> */
         

        
    );
};

export default Fruit;