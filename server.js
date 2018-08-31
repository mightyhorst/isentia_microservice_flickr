var ApiBuilder = require('claudia-api-builder'),
	FlickrService = require('./services/FlickrService'), 
	api = new ApiBuilder();

api.get('/flickr', function(req, res, next) {

	// return new Promise((done, fail)=>{

		var query = req.queryString,
			body = req.bodypath,
			params = req.pathParams;

			FlickrService.getAll()
				.then(flickrFeed => {
					// done(flickrFeed);
					return (flickrFeed);
				})

	// })
})


module.exports = api;	