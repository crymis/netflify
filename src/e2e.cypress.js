describe('End2End', () => {
  it('renders app', () => {
    cy.visit('/')

    cy.get('.App')
    cy.get('header')
    cy.get('.MyList').find('h3').should('be.visible')
  })
})
