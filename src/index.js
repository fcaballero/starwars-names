var starWarsNames = require('./starwars-name.json'), uniqueRandomArray = require('unique-random-array');

module.exports = {
     all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};