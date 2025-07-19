class InventoryPage {
  assertLoginSuccess() {
    cy.url().should('include', '/inventory.html');
    cy.get('.product_label').should('contain.text', 'Products');
  }
}

export default InventoryPage;
