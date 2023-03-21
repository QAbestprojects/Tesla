class Shop {
  get categoryMenu() {
    return cy.get(".category-menu .tds-site-nav-item");
  }
  get buttonMenu() {
    return cy.contains("Menu");
  }
  get buttonRegionNorthAmerica() {
    return cy.get(
      ".region--north-america > .tds-locale-selector-region > :nth-child(1) > :nth-child(1) > .tds-locale-selector-column > .locale-card > .tds-link"
    );
  }
  get itemsBestSellersLifeStyle() {
    return cy.get(
      "#category--lifestyle--lifestyle_best .product-tile__container"
    );
  }
  get buttonShop() {
    return cy.contains("Shop");
  }
  get buttonLifestyle() {
    return cy.contains("Lifestyle");
  }
  get buttonSopNow() {
    return cy.get(".tile-content__link .tds-btn--tertiary").eq(0);
  }
  get sectionBestSellersModelSAccessories() {
    return cy.get('[id="category--model_s--models_best"]');
  }
  get itemsBestSellersModelSAccessories() {
    return cy.get("#category--model_s--models_best .product-tile__item");
  }

  navigateToTheLifeStyleSection() {
    this.buttonShop.click({ force: true });
    this.buttonLifestyle.click({ force: true });
  }

  navigateToTheModelSAccessoriesSection() {
    cy.scrollTo(0, 1300);
    this.buttonSopNow.click({force: true});
  }
}

export default new Shop();
