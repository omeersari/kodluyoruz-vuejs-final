import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Header from "@/components/Header.vue"


describe("Header.vue", () => {
  it("check the navbar text", () => {
    const wrapper = mount(Header);
    expect(wrapper.find("#logo").text()).equal("Kodluyoruz-Final");
  });
});

