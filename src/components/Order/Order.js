import React from "react";
import styles from "./Order.module.scss";

const order = props => {
  const ingredients = [];

  for (const ingredientName in props.ingredients) {
    ingredients.push({ name: ingredientName, amount: props.ingredients[ingredientName] });
  }

  const ingredientOutput = ingredients.map(ig => {
    if (ig.amount > 0) {
      return (
        <span
          key={ig.name}
          style={{
            textTransform: "capitalize",
            display: "inline-block",
            margin: "0 8px",
            border: "1px solid #ccc",
            padding: "0 3px"
          }}
        >
          {ig.name} ({ig.amount})
        </span>
      );
    }
    return null;
  });

  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>EUR {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
