import Shop from "../../fixtures/pom/shop/shop.page.js"

describe("Shop", () => {
    beforeEach(() => {
      cy.visit("https://shop.tesla.com/");
    });
  
    it("Should navigate to the shop homepage", () => {
      cy.get('[href="/"]').should("contains.text", "Shop");
    });
  
    it("Should navigate to the LifeStyle section and verify length of the items", () => {
      Shop.navigateToTheLifeStyleSection();
      Shop.sectionBestSellers.should('have.length', 3);
    });
  });
  