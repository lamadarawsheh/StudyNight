/* global cy */
describe("Clicking on an item in  the side menu navigates to the page connected to it ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
  });
  it("navigates to the page containing the card setswhen Clicking on Card Set in the side menu ", () => {
    cy.get("#cardSetPage").click();
    cy.get("main").should("contain", "Study Set Library");
  }),
    it("navigates to the About page when Clicking on About in the side menu ", () => {
      cy.get("#aboutPage").click();
      cy.get("main").should("contain", "About Study Night"); // Adjust if needed
    });

  it("navigates to the Home page   when  Clicking on Home in the side menu    ", () => {
    cy.get("#homePage").click();
    cy.get("main").should("contain", "Study Night"); // Adjust if needed
  });
});
