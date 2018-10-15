//serve static assets
// parse the body on post req
//define routes for resource /groceries

//use the methods on the Grocery Model
//GET /groceries   get request doesnt have a body.
//POST /groceries  have a body.

//
const Grocery = require('../db/Grocery');
const path = require('path');
const express = require('express');


const app = express();


// add logging middleware
// all requests goes to the one below, or you also can state exact what request like post. 
app.use(function(req, res, next) {
	console.log(req.method, req.path);
	next();
	// next() invode line 27. 
	// middleware: [f1, f2]. requests come and line up in array. it's next() to invoke the next request. 
	//getAll doesnt require a next cos it's done. 
});

//serve static assets
app.use(express.static(path.join(__dirname, '../client/dist')));


/*
// curl -X http://localhost:3000/groceries

// if use post, have to state the path. 
app.post('/somepath', function (req, res, next) {
  console.log('incoming post');
  next()
});*/

//parse the body on post req
const bodyParser = require('body-parser');
//operation system breaks the chunks.
app.use(bodyParser.json()); //Contentype


//get groceries
app.get('/groceries', (req, res) => {
  Grocery.getAll((err, groceries) => {
  	if (err) {
      return res.status(500).send(err);
  	} else {
  		res.json(groceries);
  		//send data back to the user.
  	}
  })

})

// post groceries
app.post('/groceries', (req, res) => {

	const {name, quantity} = req.body;
  console.log(req.body)
	if (!quantity || typeof quantity !== 'number') {
		 res.status(400).send({message: 'You didn\'t say how many!' })
	} else {

  Grocery.add(name, quantity, (err, result) => {
  	if (err) {
  		return res.status(500).send(err);
  	}
  	res.sendStatus(201);
  });
}
});

app.listen(3000, () => console.log('web server listening on local host:3000'));













