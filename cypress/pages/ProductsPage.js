class ProductsPage {
  visit() {
    cy.visit('/products');
  }

  filterByCategory(mainCategory, subCategory) {
    // Click main category (e.g., Women)
    cy.contains('a', mainCategory).click();

    // Wait for subcategory to show and click subcategory (e.g., Dress)
    cy.contains('a', subCategory).click();
  }

//   getProductList() {
//     return cy.get('.features_items .product-image-wrapper');
//   }

  getProductNames() {
    return cy.get('.features_items .product-image-wrapper .productinfo p');
  }

  clickProductByName(productName) {
    cy.get('.features_items .product-image-wrapper').contains(productName).click();
  }

  getProductDetailName() {
    return cy.get('.product-information h2');
  }

  getProductDetailPrice() {
    return cy.get('.product-information span span');
  }

  getProductDetailAvailability() {
    return cy.get('.product-information p:contains("Availability")');
  }
}

export default ProductsPage;
