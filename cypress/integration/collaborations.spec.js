describe("The Home Page collaborations section", () => {
  it("display collaborations header", () => {
    cy.visit("/");

    cy.findByRole("heading", { name: /Collaborations/i }).should("exist");
  });

  it("displays collaborations", () => {
    cy.visit("/");

    cy.findByRole("heading", { name: /Mijares' maps/i }).should("exist");
  });

  it("links to an external site", () => {
    cy.visit("/");

    cy.get("#collaborations .collaboration-list")
      .find(".collab-content")
      .find("a")
      .should("have.attr", "target", "_blank");
  });
});
