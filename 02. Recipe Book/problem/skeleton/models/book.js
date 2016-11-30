

// lets create the class and see what happens,....

function book() {
	
	this._recipes = [];
	

	// method for adding reciepe
	this.addRecipes = function addRecipes(reciepe) {
		this._recipes.push(reciepe);
	}

	// method for deleting reciepe based on reciepe.id

	this.removeRecipe = function removeRecipe(id) {
		//return _.reject(this._recipes, ['id': id]); // check that this has altered the class property
		return null;
	}

	// getter method for giving out the receipes

	this.getRecipes = function getRecipes() {
		return this._recipes;
	}
	

} // end of class/constructor book
