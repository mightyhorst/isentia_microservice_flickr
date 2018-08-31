var ApiBuilder = require('claudia-api-builder'),
	api = new ApiBuilder();

api.get('/flickr', function(req, res, next) {

	console.log('req', req ); 

	return JSON.stringify(req);
})


module.exports = api;	