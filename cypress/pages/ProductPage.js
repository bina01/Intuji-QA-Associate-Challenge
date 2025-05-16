class ProductPage {
  verifyProductDetails() {
    cy.url().should('include', '/product_details/');
    cy.get('.product-information').within(() => {
      cy.get('h2').should('exist');
      cy.get('span > span').should('contain.text', 'Rs');
      cy.contains('Availability:').should('exist');
    });
  }
}

export default ProductPage;
