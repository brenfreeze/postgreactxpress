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
	const newUser = Object.values(req.body);
	const sql = "INSERT INTO users(user_name, user_age) VALUES ($1, $2) RETURNING *"

	pool.query(sql, newUser)
		.then(result => res.send(result.rows[0]))
		.catch(e => res.send(e))
});

module.exports = router;