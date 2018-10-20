import React from 'react';
import styles from "./Logo.module.scss";
import burgerLogo from "../../assets/images/burger-logo.png";

const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="Burger"/>
    </div>
);
 
export default logo;