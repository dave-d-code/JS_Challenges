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
		return this._recipes.splice(id, 1);
	},
	getRecipes : function getRecipes() {
		return this._recipes;
	}
};

