const connection = require('./index').connection; // === module.exports
/*const (connection) = require('./index'); === above*/ 

//write a function that returns all the groceries

// get stuff from database, use callback. 
const getAll =  function( cb ) {
  connection.query( 'SELECT * FROM groceries', (err,data) =>  {
  	console.log('in query')
  if(err) {
  	cb(err)
  	return;
  } 
  	cb(null, data)
  
});
}
/*const getAll =  function( cb ) {
  connection.query( 'SELECT * FROM groceries', cb) }  same as above */

// write a function that adds an item to the list
const add = function (name, quantity, cb) {
  const query = 'INSERT INTO groceries(name, quantity) VALUES(?, ?)'; 
  connection.query(query, [name, quantity], cb);
};

/*add('bluebottle coffee', 1, (err, data) => {
  if(err) {console.log('error adding', err)};
  getAll((err, data) => console.log(err? err : data));
})*/

module.exports = {
  getAll,
  add,
}