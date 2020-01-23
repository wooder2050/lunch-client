import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GroupBox from "./GroupBox";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

const groupResult = [
  ["young1", "young2", "young3"],
  ["young4", "young5", "young6"]
];
const groupMakeError = null;

describe("GroupBox compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <GroupBox groupResult={groupResult} groupMakeError={groupMakeError} />
      </MemoryRouter>
    );
  });
  it("component text test", () => {
    const people = component.find(".people").at(0);
    expect(people.text()).toBe("young1");
  });
});
