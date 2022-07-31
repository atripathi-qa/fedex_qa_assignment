import SearchPage from '../pageobjects/search.page'

describe('e2e star wars search page', () => {
    const searchPage = new SearchPage()

    beforeEach(() => {
        // Used the cy.fixture() method to pull data from the fixture file i.e. testdata.json
        cy.fixture('testdata').then(function(data) {  
            this.data = data
        })  
        cy.openSearchPage()    // custom command is added in the support/command.js
    })

    it('should let the user search by people', function() {
        searchPage.getTitle().should('have.text', 'The Star Wars Search')
        searchPage.inputText(this.data.characterName)
        .then(() => {
            searchPage.clickSearch() 
        })
        searchPage.getCharacterCard('Gender:', 'Birth year:', 'Eye color:', 'Skin color:')
        searchPage.clearInput()             // removes value from the input field
        searchPage.inputText(this.data.invalidData)
        .then(() => {
            searchPage.clickSearch() 
        })
        searchPage.getNotFoundText().should('be.visible')      // Not Found is displayed
    })

    it('should let the user search by planet', function() {
        searchPage.getPlanetRadioBtn().click()
        searchPage.inputText(this.data.planetName)
        .then(() => {
            searchPage.clickSearch()
        })
        searchPage.getPlanetCard('Population:', 'Climate:', 'Gravity:')
        searchPage.clearInput()
        searchPage.inputText(this.data.invalidData)
        .then(function() {
            searchPage.clickSearch() 
        })
        searchPage.getNotFoundText().should('be.visible')
    })
    
    it('should not display info when no search data is provided', function() {
        searchPage.inputText(this.data.characterName)
        .then(() => {
            searchPage.clickSearch() 
        })
        searchPage.getCharacterName().should('have.text', this.data.characterName)
        searchPage.clearInput()
        searchPage.enterSearchBtn('{enter}')    // Pressed "enter" on the search field 
        searchPage.getCharacterName().should('be.empty')  // Bug: previous search result is getting displayed   
    })

    it('should not display info when input search does not match with the query', function() {
        searchPage.getPlanetRadioBtn().click()
        searchPage.inputText(this.data.characterName)
        .then(() => {
            searchPage.clickSearch()
        })
        searchPage.getNotFoundText().should('be.visible')
    })

    it('should let the user perform partial matching', function() {
        searchPage.inputText(this.data.partialCharacterName)
        .then(() => {
            searchPage.clickSearch() 
        })
        searchPage.getCharacterCard('Gender:', 'Birth year:', 'Eye color:', 'Skin color:')
    })
})
