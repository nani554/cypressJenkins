/// <reference types="Cypress"/>

context('core concepts', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('[data-cy=submitBtn]').invoke('text').as('text')
    })

    // it('c', () => {

    // })
    function fizzbuzz(num) {
        // debugger;
        if (num % 3 === 0 && num % 5 === 0) {
            return 'fizzbuzz'
        }

        if (num % 3 === 0) {
            return 'fizz'
        }

        if (num % 5 === 0) {
            return 'buzz'
        }
    }
    function numsExpectedToEq(arr, expected) {
        // loop through the array of nums and make
        // sure they equal what is expected
        arr.forEach((num) => {
            expect(fizzbuzz(num)).to.eq(expected)
        })
    }

    it.only('returns "fizz" when number is multiple of 3', function () {
        //numsExpectedToEq([9, 12, 18], 'fizz')
        console.log(cy.window.title);
    })

    it('returns "buzz" when number is multiple of 5', function () {
        numsExpectedToEq([10, 20, 25], 'buzz')
    })

    it('returns "fizzbuzz" when number is multiple of both 3 and 5', function () {
        numsExpectedToEq([15, 30, 60], 'fizzbuzz')
    })
})