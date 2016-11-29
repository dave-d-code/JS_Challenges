var app = app || {};

(function(recipeBook) {
    var book = new recipeBook.book();

    $('#add_book').click(function(ev) {
        //TODO: add new recipe to book
		console.log('add new recipe to book');
		
        loadData();
    });

    $("#clear_book").click(function(ev) {
		//TODO: clears recipe form
        console.log('clears recipe form');
    });

    $(document).on('click','.remove',function(ev){
        //TODO: remove target recipe by Id
        console.log('remove target recipe by Id');
        loadData();
    });

    loadData();

    function loadData() {
        var meat = book.getRecipes().filter(function(r) {
            return r._category === "meat";
        });

        var vegan = book.getRecipes().filter(function(r) {
            return r._category === "vegan";
        });

        var dessert = book.getRecipes().filter(function(r) {
            return r._category === "dessert";
        });

        var source   = $("#recipe-trmplate").html();
        var template = Handlebars.compile(source);

        var contextMeat = {meat:meat};
        var contextvegan = {meat:vegan};
        var contextdessert = {meat:dessert};
        var html    = template(contextMeat);
        var html2    = template(contextvegan);
        var html3    = template(contextdessert);

        $('#meat_recipes').html(html);
        $('#vegan_recipes').html(html2);
        $('#dessert_recipes').html(html3);
    }

}(app));
