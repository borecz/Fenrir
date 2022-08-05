Cypress.Commands.add('isInViewport', { prevSubject: true }, (element) => {
  cy.get(element).then(($el) => {
    cy.window().then((window) => {
      const { documentElement } = window.document
      const bottom = documentElement.clientHeight
      const right = documentElement.clientWidth
      const rect = $el[0].getBoundingClientRect()

      expect(rect.top).to.be.lessThan(bottom)
      expect(rect.bottom).to.be.greaterThan(0)
      expect(rect.right).to.be.greaterThan(0)
      expect(rect.left).to.be.lessThan(right)
    })
  })
})
