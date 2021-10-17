import React, { useEffect, useState } from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Fruit from '../Fruit/Fruit';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./fruits.json')
            // fetch('./fruits.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setFruits(data));
    }, [])

    const handleAddToCart = (fruit) => {
        let newCart = [...cart,fruit];
        // fruits.quantity = 1;
        setCart(newCart);
        console.log(fruit);
        console.log(newCart);
    }
    return (
        <Container>
        <div className="goods-container">
           <Row>
           <Col sm={8}>
           <div className="fruits-container">
                <Row>          
                    {
                    fruits.map(fruit => <Fruit
                        key={fruit.id}
                        fruit={fruit}
                        handleAddToCart={handleAddToCart}
                    ></Fruit>)
                }
                </Row>
            </div>
           </Col>
            <Col sm={4}>
            <div className="cart-container">
                {
                    <Cart cart={cart} >

                        <Link to="/">Review</Link>
                    </Cart>
                }
            </div>
            </Col>
           </Row>
        </div>
        </Container>
    );
};

export default Fruits;