import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Add from "@/views/BookOperations/Add.vue";

describe("Add.vue", () => {
  it("renders h2 tag", () => {
    const wrapper = mount(Add);
    expect(wrapper.find("h2").text()).equal("Add New Book");
  });
  it("button click triggers submit method", () => {
    const wrapper = mount(Add, {
      attachToDocument: true
    });

    expect(wrapper.find("button").trigger("click"));
  });

  it
});
