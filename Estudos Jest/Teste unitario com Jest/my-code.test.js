const { sum, inOneHour } = require('./my-code');

describe('math functions', () => {
    describe('math functions', () => {
        /*
        beforeAll(() => {
            console.log('before all')
        })
        beforeEach(() => {
            console.log('before each')
        })

        afterAll(() => {
            console.log('after all')
        })
        beforeEach(() => {
            console.log('after each')
        })
        */

        it('sums 2 numbers', () => {
            expect(sum(1, 2)).toBe(3);
        });
        it('sums 2 numbers', () => {
            expect(sum(1, 2)).toBe(3);
        });
    });
});

describe('time functions', () => {
    it('returns the timestamp for one hour ahead', () => {
        const realDateNow = Date.now.bind(global.Date); // jogando a data do sistema para uma nova variavel
        global.Date.now = jest.fn(() => 0); //congelando a data do sistema
        expect(inOneHour()).toBe(3600000);
        global.Date.now = realDateNow; //pegando a data que foi jogada na variavel e colocando de volta na data do sistema
    });         
});
