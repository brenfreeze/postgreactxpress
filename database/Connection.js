const {Pool} = require('pg');

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'postgres',
	password: 'pass',
	port: 5432,
});

pool.connect();

module.exports = {
	query: (text, params) => pool.query(text, params)
};