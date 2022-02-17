describe("The Home Page projects section", () => {
  it("display projects header", () => {
    cy.visit("/");

    cy.findByRole("heading", { name: /Projects/i }).should("exist");
  });

  it("displays projects", () => {
    cy.visit("/");

    cy.findByRole("heading", { name: /En ruta/i }).should("exist");
    cy.findByRole("heading", { name: /CMS Banda UJI/i }).should("exist");
    cy.findByRole("heading", { name: /Hackathon 19/i }).should("exist");
    cy.findByRole("heading", { name: /Programing challanges/i }).should(
      "exist"
    );
    cy.findByRole("heading", { name: /Sticker APP/i }).should("exist");
    cy.findByRole("heading", { name: /CSS ASSETS/i }).should("exist");
  });

  it("shows more info of elements", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        cy.stub(win.console, "error").as("consoleError");
      },
    });

    cy.get("#projects .projects-list")
      .find("div.project")
      .find("a")
      .click({ multiple: true });

    cy.get("@consoleError").should("not.be.called");
  });
});
