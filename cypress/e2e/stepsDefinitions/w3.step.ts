import { And, Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on {string} page', (page: string) => {
  cy.visit(page)
})

Then('all links on the page go to another live page', () => {
  cy.get('a:not([href^="mailto\\:"], [href=""], [href*="#"])').each(($link) => {
    if ($link.prop('href'))
      cy.request($link.prop('href')).then(({ status }) => {
        expect(status).to.be.within(200, 299, 'successfull request')
      })
  })
})

And('all anchor links work as expected', () => {
  cy.get('a[href*="#"]').each(($anchorLink) => {
    cy.wrap($anchorLink)
      .invoke('attr', 'href')
      .then((href) => {
        cy.wrap($anchorLink).click()
        cy.get(href).isInViewport()
      })
  })
})
