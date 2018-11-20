import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Navigationitems from "./Navigationitems";
import Navigationitem from "./Navigationitem/Navigationitem";

configure({ adapter: new Adapter() });

describe("<Navigationitems />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navigationitems />);
  });
  it("should render two <Navigationitems /> elements if not authenticated", () => {
    expect(wrapper.find(Navigationitem)).toHaveLength(2);
  });
  it("should render three <Navigationitems /> elements if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(Navigationitem)).toHaveLength(3);
  });
  it("should cotain Log Out text", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(<Navigationitem link="/logout">Log Out</Navigationitem>)
    ).toEqual(true);
  });
});
