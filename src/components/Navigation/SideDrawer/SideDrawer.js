import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigationitems/Navigationitems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";
import styles from "./SideDrawer.module.scss";

const sideDrawer = props => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if(props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
