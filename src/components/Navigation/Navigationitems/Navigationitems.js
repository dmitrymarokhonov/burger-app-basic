import React from "react";
import styles from "./Navigationitems.module.scss";
import NavigationItem from "./Navigationitem/Navigationitem";

const navigationItems = props => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" exact>Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    <NavigationItem link="/auth">Authenticate</NavigationItem>
  </ul>
);

export default navigationItems;
