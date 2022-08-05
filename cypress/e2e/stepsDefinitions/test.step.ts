import {
  And,
  DataTable,
  Given,
  Then
} from '@badeball/cypress-cucumber-preprocessor'

before(() => {
  console.clear()

  Cypress.on('window:before:load', (win) => {
    cy.spy(win.console, 'error').as('spy')
  })
})

Given('I navigate to {string} page', function (page: string) {
  cy.visit(page)
})

Given('I request {string} page', function (page: string) {
  cy.request(page).then(({ status }) => cy.wrap(status).as('status'))
})

Then(
  'the response code is one within the range',
  function (dataTable: DataTable) {
    const input = dataTable.hashes()
    expect(this.status).to.be.within(
      +input[0].min,
      +input[0].max,
      'successfull request'
    )
  }
)

Then('there are no console errors on page load', function () {
  const DELAY = 1000

  cy.wait(DELAY).then(() => {
    expect(this.spy).to.not.be.called
  })
})
