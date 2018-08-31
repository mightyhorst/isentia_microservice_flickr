var request = require('request-promise');

var flickrApi = {
	publicPhotosUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'
}

var FlickrService = {
	getAll: function() {

		return new Promise((done, fail) => {

			request(flickrApi.publicPhotosUrl)
				.then(flickrRes => {
					done(flickrRes);
				})
				.catch(err => {
					fail(err);
				})
				
		})
		
	}
}
module.exports = FlickrService;