'use strict';

var mongoose = require("mongoose");

var Poll = new mongoose.Schema({
    author: {
        id: String,
		displayName: String,
		username: String
    },
    title: String,
    date: String,
    choices: [{
        choice: String,
        votes: [String]
    }]
});

module.exports = mongoose.model('Poll', Poll);