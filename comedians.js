const express = require('express');
const router = express.Router();
const comediansArray = require('./models/comedian')

router.get('/', (request, response) => {
    response.send(comediansArray);
});

router.get('/:id', (request, response) => {
	for (let i = 0; i < comediansArray.length; i++) {
		if (comediansArray[i].id == request.params.id) {
	      response.send(comediansArray[i]);
		}	
	} 
});

router.post('/', (request, response) => {
	if (request.body) {
		comediansArray.push(request.body);
		response.status(200).send();
	} else {
		response.status(400).send();
	}

})

module.exports = router;