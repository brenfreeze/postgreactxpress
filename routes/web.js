const express = require('express');
const router = express.Router();
const {Pool, Client} = require('pg');

const pool = new Pool({
	user: 'rawncemryjeyrf', //postgres
	host: 'ec2-54-235-240-126.compute-1.amazonaws.com', //localhost
	database: 'de3bq54a7ebdbc', //postgres
	password: 'edf8ed58d14b82de2e8db230090321b9192d269fcbad724cd41c2a96eeb00520', //pass
	port: 5432,
});

pool.connect();

const client = new Client({
	user: 'rawncemryjeyrf', //postgres
	host: 'ec2-54-235-240-126.compute-1.amazonaws.com', //localhost
	database: 'de3bq54a7ebdbc', //postgres
	password: 'edf8ed58d14b82de2e8db230090321b9192d269fcbad724cd41c2a96eeb00520', //pass
	port: 5432,
});

client.connect();

router.get('/', (req, res) => {
	res.render("index", {title: "Express x React x pgSQL"});
});

router.get('/users', (req, res) => {
	pool.query('SELECT * FROM users ORDER BY user_id ASC')
		.then(result => res.send(result.rows))
		.catch(e => res.send(e))
});

router.post('/users', (req, res)=>{
	const newUser = Object.values(req.body);
	const sql = "INSERT INTO users(user_name, user_age) VALUES ($1, $2) RETURNING *"

	pool.query(sql, newUser)
		.then(result => {
			res.send(result.rows[0])
		})
		.catch(e => res.send(e))
});

router.put('/users', (req, res) => {
	const updatedUser = Object.values(req.body);
	const sql = "UPDATE users SET user_name = $2, user_age = $3 WHERE user_id = $1";

	pool.query(sql, updatedUser)
		.then(result => {
			client.query('SELECT * FROM users ORDER BY user_id ASC')
				.then(rslt => {
					res.send(rslt.rows);
				})
		});
});

module.exports = router;
