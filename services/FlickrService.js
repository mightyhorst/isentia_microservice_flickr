var request = require('request-promise');
var parser = require('xml2json');

var flickrApi = {
	publicPhotosJson: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
	publicPhotosXml: 'https://api.flickr.com/services/feeds/photos_public.gne'
}

var FlickrService = {


	/**
	* 
	* Get all Public Flickr feed as XML, then convert to json 
	*
	* returns {Promise} flickrJson an array of Flickr Objects 
	getAll: function() {

		return new Promise((done, fail) => {

			request(flickrApi.publicPhotosXml)
				.then(flickrXml => {
					return parser.toJson(flickrXml);
				})
				.then(flickrJson => {
					done(flickrJson);
				})
				.catch(err => {
					fail(err);
				})

		})
		
	}
}
module.exports = FlickrService;