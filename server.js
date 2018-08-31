var ApiBuilder = require('claudia-api-builder'),
	FlickrService = require('./services/FlickrService'), 
	api = new ApiBuilder();

api.get('/flickr', function(req, res, next) {

	console.log('req', req ); 
	var query = req.queryString,
		body = req.bodypath,
		params = req.pathParams;

		FlickrService.getAll()
			.then(flickrFeed => {
				return flickrFeed
			})
})


module.exports = api;	