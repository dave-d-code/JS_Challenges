var app = app || {};
app.recipeBook = app.recipeBook || {};  // singleton method to solve namespace issue?

/* Creates new book object which holds an array of recipe objects
* @Class
*
*/

app.recipeBook.book = function app_recipeBook_book() {};


app.recipeBook.book.prototype = {

	_recipes: [],
	addRecipes : function addRecipes(reciepe) {
		this._recipes.push(reciepe);
	},
	removeRecipe : function removeRecipe(id) {
		var index = this._recipes.map(function(obj) { return obj._id; }).indexOf(id);
		return this._recipes.splice(index, 1);
	},
	getRecipes : function getRecipes() {
		return this._recipes;
	}
};

