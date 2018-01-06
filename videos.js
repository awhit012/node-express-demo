var express = require('express')
var router = express.Router()

const videosArray = [
	{id: 1, title: "America is the Greatest Country in the United States", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
    {id: 2, title: "Micheal Che Matters", url: "https://www.netflix.com/watch/80049871?trackId=13752289&tctx=0%2C0%2C"},
    {id: 3, title: "Baby Cobra", url: "https://www.netflix.com/watch/80101493?trackId=13752290&tctx=1%2C1%2C"}
]

// define the home page route
router.get('/', (request, response) => {
    response.send(videosArray);
});

// define the about route
router.get('/:id', (request, response) => {
   response.send('here is a video');
});

module.exports = router;