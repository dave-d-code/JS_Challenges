var app = app || {};
app.recipeBook = app.recipeBook || {};

// lets create the class and see what happens,....

app.recipeBook.book = function app_recipeBook_book() {};


app.recipeBook.book.prototype = {

	_recipes: [],
	addRecipes : function addRecipes(reciepe) {
		this._recipes.push(reciepe);
	},
	removeRecipe : function removeRecipe(id) {
		//return _.reject(this._recipes, ['id': id]); // check that this has altered the class property
		return null;
	},
	getRecipes : function getRecipes() {
		return this._recipes;
	}
};

