var app = app || {};

(function(recipeBook) {
   
   
   var book = new app.recipeBook.book(); 
      

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
        var id = $(this).data('id'); 
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

        ratingData(); // calling ratingData() from here isnt the best design practice, done for quick demo.
    }

    
    /* extra function to show top 3 rated recipes and place into new template
    * @returns {html} HTML into Handlebars template #rating-template
    */

    function ratingData () {
        var array1 = $.extend(true, [], book.getRecipes());
        array1.sort(function(a, b){ return a._rating < b._rating;});

        // add a new 'position' property for to each object in the array
        for (var i = 0; i < array1.length; i++) { 
            array1[i]['position'] = i + 1;
        };

        // show top 3 only to send to template
        if (array1.length > 3) { 
            array1 = array1.slice(0, 3);
        }

        var template = Handlebars.compile($('#rating-template').html());
        var html = template({rating:array1});

        $('#rating-results').empty().html(html);

    }

}(app));
