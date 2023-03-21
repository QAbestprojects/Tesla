import Shop from "../../fixtures/pom/shop/shop.page.js";

describe("Shop", () => {
  beforeEach(() => {
    cy.visit("https://shop.tesla.com/");
  });

  it("Should navigate to the shop homepage, TESLA-19", () => {
    cy.get('[href="/"]').should("contains.text", "Shop");
  });

  it("Should navigate to the LifeStyle section and verify the Best Sellers items, TESLA-17", () => {
    Shop.navigateToTheLifeStyleSection();
    Shop.itemsBestSellersLifeStyle.should("have.length", 3);
  });

  it("Should navigate to the Model S Accessories and verify the Best Sellers items, TESLA-14", () => {
    Shop.navigateToTheModelSAccessoriesSection();
    Shop.sectionBestSellersModelSAccessories.should(
      "contains.text",
      "Best Sellers"
    );
    Shop.itemsBestSellersModelSAccessories.should("have.length", 3);
  });
});
