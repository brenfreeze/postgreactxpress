const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Mahalaga pala iteyyyyyyy

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/static', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(require('./routes/web'));

app.listen(3000, ()=>{
	console.log('Listening on port 3000');
});