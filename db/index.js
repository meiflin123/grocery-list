const mysql = require ('mysql');

const connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: '',
	database: 'grocery_list'
});

connection.connect((err) => {
	if (err) {
		console.log('problem connecting to mysql', err);
		return;
	}
	console.log('now connected');
} )

connection.query('select * from groceries', (err, data) => {
	console.log(err? err : data)
})

/*module.exports = {}*/
/*module.exports = connection;*/
exports.connection = connection;