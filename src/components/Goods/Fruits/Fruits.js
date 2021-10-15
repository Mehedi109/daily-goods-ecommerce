import React, { useEffect, useState } from 'react';
import Fruit from '../Fruit/Fruit';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        fetch('./fruits.json')
            // fetch('./fruits.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setFruits(data));
    }, [])
    return (
        <div>
            {
                fruits.map(fruit => <Fruit
                    key={fruit.id}
                    fruit={fruit}
                ></Fruit>)
            }
        </div>
    );
};

export default Fruits;