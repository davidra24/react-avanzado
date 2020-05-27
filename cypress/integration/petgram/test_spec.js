describe('Petgram', function () {
  it('para ver si la app funciona', function () {
    cy.visit('/');
  });

  it('Navegamos a una categoría y vemos fotos', function () {
    cy.visit('/pet/1');
    cy.get('article');
  });

  it('Si podemos navegar con la navbar a la home', function () {
    cy.visit('/pet/1');
    cy.get('nav a').first().click();
    cy.url().should('include', '/');
  });

  it('Que los usuarios no registrados ven el formulario de registro e inicio de sesión al ir a favoritos', function () {
    cy.visit('/favs');
    cy.get('form').should('have.length', 2);
  });
});
