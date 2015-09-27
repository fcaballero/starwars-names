var starWarsNames = require('./starwars-names.json'), uniqueRandomArray = require('unique-random-array');

module.exports = {
     all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};