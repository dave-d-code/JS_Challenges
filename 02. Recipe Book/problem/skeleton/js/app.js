var app = app || {};

(function(recipeBook) {
   
   
   var book = new app.recipeBook.book(); // sort this out..
      

    $('#add_book').click(function(ev) {
        ev.preventDefault();
        
        var rec1 = new recipe();
        rec1.setName($('#name').val());
        rec1.setRating($('#rating').val());
        rec1.setImage($('#image').val());
        rec1.setCategory($('#category').val());
        book.addRecipes(rec1);
        
		
        loadData();
    });

    $("#clear_book").click(function(ev) {
        ev.preventDefault();
		$("form").trigger('reset');
        
    });

    $(document).on('click','.remove',function(ev){
        //TODO: remove target recipe by Id
        var id = $(this).data('id'); // this doesnt work.. use lodash
        book.removeRecipe(id);
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
