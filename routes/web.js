const express = require('express');
const router = express.Router();
const {Pool, Client} = require('pg');

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'ex1_webpack',
	password: 'pass',
	port: 5432,
});

pool.connect();

router.get('/', (req, res) => {
	res.render("index", {title: "Express x React x pgSQL"});
});

router.get('/users', (req, res) => {
	pool.query('SELECT * FROM users')
		.then(result => res.send(result.rows))
		.catch(e => res.send(e))
});

router.post('/users', (req, res)=>{
	res.send(JSON.parse(req))
});

module.exports = router;