import Model3 from "../../fixtures/pom/tesla-models/model3.page.js"

describe("Model 3", () => {
    beforeEach(() => {
      cy.visit("/model3");
    });
  
    it("Should navigate to the Model 3 page", () => {
      Model3.textModel3.should("be.visible");
      Model3.buttonOrderNow.should("be.visible");
    });
  });