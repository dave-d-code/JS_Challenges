/*
* Creates a new recipe object
* @Class
*/

var recipe = (function() {

	var newId = 0;

	return function () {
		this._id = newId++; 
		this._name = "";
		this._rating = "";
		this._image = "";
		this._category = "";


		this.setName = function(Name) {
			this._name = Name;
		}

		this.setImage = function(image) {
			this._image = image;
		}

		this.setCategory = function(category) {
			this._category = category;
		}

		this.setRating = function(rating) {
			this._rating = rating;
		}
	};


})(); // end of class recipe
