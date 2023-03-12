describe("Custom order", () => {
    beforeEach(() => {
      cy.visit("/model3/design#overview");
    });
  
    it("Should select Rear-Wheel Drive model", () => {
        cy.get('fieldset [value="$MT322"]').should('be.checked');
    });

    it("Should select Red Multi-Coat Paint", () => {
        cy.scrollTo(0, 1500)
        cy.get('[data-id="$PPSW-option"]').should('be.checked');
        cy.get('[id="PAINT_$PPMR"]').click({force: true});
        cy.get('[id="PAINT_$PPMR"]').should('be.checked');
        cy.get('[data-id="PAINT-price"]').should('contains.text', '$2,000');
    });

    it("Should select 19 Sport Wheels", () => {
        cy.scrollTo(0, 2000)
        cy.get('[id="WHEELS_$W40B"]').should('be.checked');
        cy.get('[id="WHEELS_$W41B"]').click({force: true});
        cy.get('[id="WHEELS_$W41B"]').should('be.checked');
        cy.get('[data-id="WHEELS-price"]').should('contains.text', '$1,500');
    });
  });
