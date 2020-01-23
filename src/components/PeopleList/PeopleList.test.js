import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PeopleList from "./PeopleList";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

const person = [
  { name: "young1" },
  { name: "young2" },
  { name: "young3" },
  { name: "young4" },
  { name: "young5" },
  { name: "young6" }
];
const deletePeople = jest.fn();

describe("PeopleList compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <PeopleList person={person} deletePeople={deletePeople} />
      </MemoryRouter>
    );
  });
  it("component text test", () => {
    const name1 = component.find(".name").at(0);
    const name2 = component.find(".name").at(1);
    expect(name1.text()).toBe("young1");
    expect(name2.text()).toBe("young2");
  });
});
