import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from "./Burger.module.scss";
import { Object } from "core-js";

const burger = props => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey +i} type={igKey} />;
        } ) 
    })
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
