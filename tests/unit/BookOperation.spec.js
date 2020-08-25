import { expect } from "chai";
import { mount } from "@vue/test-utils";
import BookOperation from "@/components/BookOperation.vue";

describe("BookOperation.vue", () => {
  it("router-link text matched", () => {
    const wrapper = mount(BookOperation);
    expect(wrapper.find("router-link").text()).to.contain("Add New Book");
  });
});
