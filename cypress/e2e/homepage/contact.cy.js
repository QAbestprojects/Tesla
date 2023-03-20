import Contacts from "../../fixtures/pom/homepage/contacts.page";
import Homepage from "../../fixtures/pom/homepage/home.page.js";

describe("Contact", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should navigate to the Contact page", () => {
    Homepage.fullPage.scrollTo("bottom");
    Homepage.buttonContact.click({ force: true });
    Contacts.h1.should("contain.text", "Contact");
    Contacts.h2.should("contain.text", "Worldwide Offices");
    Contacts.sectionTeslaHQTexas.should(
      "contain.text",
      "Tesla Headquarters - Gigafactory Texas"
    );
    Contacts.sectionTeslaHQTexas.should("contain.text", "1 Tesla Road");
    Contacts.sectionTeslaHQTexas.should("contain.text", "Austin, TX 78725");
  });
});
