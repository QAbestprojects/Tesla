import CustomOrder from "../../fixtures/pom/custom-order/custom.order.page";

describe("Custom order", () => {
    beforeEach(() => {
      cy.visit("/model3/design#overview");
    });
  
    it("Should verify that Rear-Wheel Drive Model 3 was selected, TESLA-4", () => {
        CustomOrder.fieldsetModel3.should('be.checked');
    });
    
    //Flaky one
    it("Should select and verify Red Multi-Coat Paint, TESLA-5", () => {
        cy.scrollTo(0, 1500)
        CustomOrder.paintPearlWhite.should('be.checked');
        CustomOrder.paintRedMultiCoat.click({force: true});
        CustomOrder.paintRedMultiCoat.should('be.checked');
        CustomOrder.priceRedMultuCoat.should('contains.text', '$2,000');
    });

    //Flaky one
    it("Should select and verify 19 Sport Wheels, TESLA-6", () => {
        cy.scrollTo(0, 2000)
        CustomOrder.wheels18Aero.should('be.checked');
        CustomOrder.wheels19Sport.click({force: true});
        CustomOrder.wheels19Sport.should('be.checked');
        CustomOrder.price19SportWheels.should('contains.text', '$1,500');
    });
  });
