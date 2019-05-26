const low = require('lowdb');
const db = require('banco.json');

db
    .defaults({
    produto: [],
    preco: []
})
    .write()