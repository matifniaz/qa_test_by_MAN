/// <reference types="Cypress" />
const listing_page = require("../pages/listing_page");
const picture_details_page = require("../pages/picture_details_page");
var card_num = 1
var getText
let img_num
let authorName
let total_card
describe("End To End Flow", () => {

    before(() => {
        cy.visit('/')
        listing_page.elements.total_card().then(($value) => {
            total_card = $value.length
            cy.log(total_card)

        })
    })

 

    describe("Verify Single Picture", () => {
        it("Verify Gallery Listing Page", () => {
            // cy.intercept(Cypress.env('apiUrl') + '/v2/list').as('image_list')
            // cy.wait('@image_list')
            listing_page.verify_Gallery_Listing()


            listing_page.elements.detail_link(card_num).then(($value) => {
                getText = $value.text()
            })
            listing_page.elements.detail_link(card_num).should('be.visible').click()
        })

        it("verify Picture Details Page", () => {
            img_num = getText.substring(0, getText.indexOf(")"));
            authorName = getText.substring(getText.indexOf(')') + 1);
            //Verify pictures  detail Page is opened.
            cy.url().should('contain', '/pictures/detail/')
            //Verify authorName is same on listing and detail page.
            picture_details_page.elements.author_name().should('contain', authorName)
            //Verify picturenumber is same on listing and detail page.
            // picture_details_page.elements.author_name().should('contain', img_num)

            //Verify Download Link is avalible

            picture_details_page.elements.back_link().should('be.visible')
            picture_details_page.elements.download_link().should('be.visible')
        })
        it("Verify Image Download Form Picture Detail Page", () => {
            picture_details_page.elements.download_link().click()
            cy.url().should('contain', 'i.picsum.photos/id/' + (img_num - 1) + '/')


        })
        it("Verify Back Link Form Picture Detail Page", () => {
            cy.go('back')
            cy.url().should('contain', '/pictures/detail/')
            picture_details_page.elements.back_link().should('be.visible').click()
            listing_page.verify_Gallery_Listing()


        })
        it("Verify Download Form Gallery Listing Page.", () => {
            listing_page.elements.download_link(card_num).should('be.visible')
            listing_page.elements.download_link(card_num).should('contain', 'Download')
            listing_page.elements.download_link(card_num).click()
            cy.url().should('contain', 'i.picsum.photos/id/' + (img_num - 1) + '/')



        })
    })

    describe("Verify All Pictures", () => {
        for (let i = 1; i <= 30; i++) {
            describe("Picture Number: " + i, () => {
                after(() => {
                    cy.visit('/')
                })
                before(() => {
                    cy.visit('/')
                })
                it(i + ". Verify Gallery Listing Page", () => {
                    //  cy.intercept(Cypress.env('apiUrl') + '/v2/list').as('image_list')
                    //  cy.wait('@image_list')
                    cy.log("%%%%%%%%%%%%%%%%%%%%%%%%%" + total_card)
                    listing_page.verify_Gallery_Listing()


                    listing_page.elements.detail_link(i).then(($value) => {
                        getText = $value.text()
                    })
                    listing_page.elements.detail_link(i).should('be.visible').click()
                })

                it(i + ". verify Picture Details Page", () => {
                    img_num = getText.substring(0, getText.indexOf(")"));
                    authorName = getText.substring(getText.indexOf(')') + 1);
                    //Verify pictures  detail Page is opened.
                    cy.url().should('contain', '/pictures/detail/')
                    //Verify authorName is same on listing and detail page.
                    picture_details_page.elements.author_name().should('contain', authorName)
                    //Verify picturenumber is same on listing and detail page.
                    // picture_details_page.elements.author_name().should('contain', img_num)

                    //Verify Download Link is avalible

                    picture_details_page.elements.back_link().should('be.visible')
                    picture_details_page.elements.download_link().should('be.visible')
                })
                it(i + ". Verify Image Download Form Picture Detials Page", () => {
                    picture_details_page.elements.download_link().click()
                    cy.url().should('contain', 'i.picsum.photos/id/' + (img_num - 1) + '/')


                })
                it(i + ". Verify Back Link Form Picture Detials Page", () => {
                    cy.go('back')
                    cy.url().should('contain', '/pictures/detail/')
                    picture_details_page.elements.back_link().should('be.visible').click()
                    listing_page.verify_Gallery_Listing()

                })
                it(i + ". Verify Download Form Gallery Listing Page.", () => {
                    listing_page.elements.download_link(i).should('be.visible')
                    listing_page.elements.download_link(i).should('contain', 'Download')
                    listing_page.elements.download_link(i).click()
                    cy.url().should('contain', 'i.picsum.photos/id/' + (img_num - 1) + '/')



                })
            })
        }
    })


})



