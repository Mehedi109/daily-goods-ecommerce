import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    // let total=0;
    // for (const prevprice of cart){
    //     total=total+prevprice.recentPrice;
    // }

    const total=cart.reduce((total,current)=>total+current.recentPrice,0);

    return (
        <div>
            <h3>Total Item : {cart.length}</h3>
            <h4>Total Price :{total} </h4>
        </div>
    );
};

export default Cart;