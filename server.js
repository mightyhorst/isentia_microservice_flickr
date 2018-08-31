var ApiBuilder = require('claudia-api-builder'),
	FlickrService = require('./services/FlickrService'), 
	api = new ApiBuilder();

api.get('/flickr', function(req, res, next) {

	var query = req.queryString,
		body = req.bodypath,
		params = req.pathParams;

		FlickrService.getAll()
			.then(flickrFeed => {
				return {
					success: true, 
					flickrFeed: flickrFeed
				};
			})
			.catch(err => {
				return {
					success: false, 
					err: err
				};
			})

})


module.exports = api;	