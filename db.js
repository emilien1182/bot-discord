const Keyv = require('keyv');
const db = new (Keyv.default || Keyv)('sqlite://database.sqlite');

db.on('error', err => console.error('Erreur de connexion DB:', err));

module.exports = db;