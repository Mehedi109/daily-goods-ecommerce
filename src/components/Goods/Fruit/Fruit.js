import React from 'react';

const Fruit = (props) => {
    const { img, pic, picture, name, previousPrice, recentPrice } = props.fruit;
    const currencyUrl = "https://i.ibb.co/vVxw1VL/taka-bangladesh-trade-BDT-512.png";
    const currency = {
        width: '15px',
        marginBottom: '5px'
    }
    return (
        <div>
            <img style={{ width: '200px' }} src={img} alt="" />
            <h5>{name}</h5>
            <p>Price : <del><img src={currencyUrl} style={currency} alt="" />{previousPrice}</del> <img src={currencyUrl} style={currency} alt="" />{recentPrice}</p>
        </div>
    );
};

export default Fruit;