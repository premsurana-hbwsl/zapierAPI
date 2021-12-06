const express = require('express');
const PORT = process.env.PORT || 4000;
var app = express();

app.get('/', (req, res) => {
	res.send('hello world');
	res.end();
})

app.get('/user', (req,res) => {
	if ( req.query.api_key === 'secret' ) {
		res.json({
			username: 'Helllo WORLD',
		});
	}
	else {
		res.status(401).json({
			error: true
		});
	}
	res.end();
});

app.listen(PORT, () => {
	console.log(`Server running on localhost:${PORT}`);
});