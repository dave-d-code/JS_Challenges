/* Creates new card objects
* @class
*/


var card = (function() {

	var newId = 0;

	return function() {

		this._id = newId++;
		this._name = "";
		this._column;

		this.setName = function(name) {
			this._name = name;
		}

		this.setColumn = function(column) {
			this._column = column;
		}

		this.getColumn = function() {
			return parseInt(this._column);
		}

		this.getName = function() {
			return this._name;
		}

		this.getId = function() { // wtf?
			return this._id;
		}

	};


})(); // end of class card
