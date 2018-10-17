import React from "react";
import Aux from "../../hoc/Aux";
import scss from "./Layout.module.scss";

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={scss.Content}>{props.children}</main>
  </Aux>
);

export default layout;