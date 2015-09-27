var expect = require('chai').expect,
    starwars = require('./index');

describe('startWars', function () {
    describe('all', function () {
        it('should be an array of strings!', function () {
            expect(starwars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain "Luke Skywalker"', function () {
            expect(starwars.all).to.include('Luke Skywalker');
        });
    });

    describe('random', function () {
        it('should return a random item from starwars.all', function () {
            var randomItem = starwars.random();

            expect(starwars.all).to.include(randomItem);
        });
    });
});
