/* global cy */
describe("ADD set form  ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
    cy.get("#cardSetPage").click();
    cy.get("[data-cy='toggle_form'").click();
  });
  it("add anew set with the title added  ", () => {
    cy.get('input[name="titleInput"]').type("My New Set");
    cy.get('input[type="submit"]').click();

    cy.get("main").should("contain", "My New Set");
  });
  it("show error when title is empty  ", () => {
    cy.get('input[type="submit"]').click();
    cy.get("main").should("contain", "TITLE CANNOT BE EMPTY");
  });
});
describe("Add Card Form  ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
    cy.get("#cardSetPage").click();
    cy.get(".cardSets").first().click();
  });
  it("add anew card with the term and description added  ", () => {
    cy.get("[data-cy='toggle_form'").click();

    cy.get('input[name="termInput"]').type("newcard");
    cy.get('input[name="descriptionInput"]').type("basic unit");

    cy.get('input[type="submit"]').click();

    cy.get("main").should("contain", "newcard");
  });
  it("show error when term or descripotion  are empty  ", () => {
    cy.get("[data-cy='toggle_form'").click();

    cy.get('input[type="submit"]').click();
    cy.get("main").should("contain", "TERM AND DESCRIPTION CANNOT BE EMPTY");
  });
});
