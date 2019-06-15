import React from 'react';

import pizzaImage from '../../assets/pizza.jpg';

import styles from './PizzaImage.css';


const PizzaImage = (props) => {
    return (
        <div className={styles.PizzaImage}>
            <img src={pizzaImage} alt="pizza on the plate"/>
        </div>
    );
};

export default PizzaImage;

