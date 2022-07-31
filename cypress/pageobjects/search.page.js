export class SearchPage {

    getTitle() {
        return cy.contains('The Star Wars Search')
    }

    inputText(text) {
        return cy.get('[data-testid="inputForm"]').type(text)
    }

    clickSearch() {
        cy.get('[data-cy="submitBtn"]').click()
        return this
    }

    enterSearchBtn(text) {
        cy.get('[data-cy="submitBtn"]').type(text)
        return this
    }

    getCharacterName() {
        return cy.get('[data-testid="characterCardSubtext"]')
    }

    getCharacterCard() {
        cy.get('[data-testid="characterCard"]')
        .then(characterCard => {
            cy.wrap(characterCard).find('[data-cy="gender"]')
            cy.wrap(characterCard).find('[data-cy="birthYear"]')
            cy.wrap(characterCard).find('[data-cy="eyeColor"]')
            cy.wrap(characterCard).find('[data-cy="skinColor"]')
        })
        return this
    }

    getPlanetCard() {
        cy.get('[data-testid="planetCard"]')
        .then(planetCard => {
            cy.wrap(planetCard).find('[data-cy="poplulation"]')
            cy.wrap(planetCard).find('[data-cy="climate"]')
            cy.wrap(planetCard).find('[data-cy="gravity"]')  
        })
        return this
    }

    getPeopleRadioButton() {
        return cy.get('[data-cy="peopleBtn"]')
    }

    getPlanetRadioBtn() {
        return cy.get('[data-cy="planetsBtn"]')
    }

    getNotFoundText() {
        return cy.contains('Not found.')
    }

    clearInput() {
        cy.get('[data-testid="inputForm"]').clear()
        return this
    }


}
export default SearchPage