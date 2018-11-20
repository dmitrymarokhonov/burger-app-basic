import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Toolbar from "./Toolbar";
import DrawerToggler from "../SideDrawer/DrawerToggle/DrawerToggle";
import NavigationItems from "../Navigationitems/Navigationitems";
import Logo from "../../Logo/Logo";

configure({ adapter: new Adapter() });

describe("<Toolbar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Toolbar />);
  });
  it("should always render <DrawerToggler />", () => {
    expect(wrapper.find(DrawerToggler)).toHaveLength(1);
  });
  it("should always render <Navigationitems />", () => {
    expect(wrapper.find(NavigationItems)).toHaveLength(1);
  });
  it("should always render <Logo />", () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });
});
