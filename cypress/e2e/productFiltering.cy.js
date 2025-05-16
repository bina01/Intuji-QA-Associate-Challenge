import ProductPage from "../pages/ProductPage";

const productPage = new ProductPage();
describe('Product Browsing & Filtering', () => {
  before(() => {
    // Visit homepage and navigate to Products page
    cy.visit('/');
    cy.contains('Products').click();
    cy.url().should('include', '/products');
  });

  it('Filter products by Women > Dress category', () => {
    cy.contains('a', 'Women').click();

    cy.contains('a', 'Dress').click();

    cy.url().should('include', '/category_products/1');

    // Verify product list is shown and includes expected keyword
    cy.get('.features_items .productinfo.text-center')
      .should('exist')
      .first()
      .within(() => {
        cy.get('p').invoke('text').then((text) => {
          expect(text.toLowerCase()).to.include('dress');
        });
      });
  });

it('Click on View Product and verify product detail page info', () => {
  // Ensure we are on the category product listing (e.g., Dress)
  cy.visit('/category_products/1');

 cy.get('a')
    .contains('View Product')
    .first()
    .then(($link) => {
      const productLink = $link.prop('href');
      cy.visit(productLink); // Navigate to product detail page
    });

  // Verify product detail
   productPage.verifyProductDetails();
});

});
