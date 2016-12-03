var app = app || {};

(function(kanbanApp) {
    //TODO: #1 MAKE ALL UL’s SORTABLE
    //console.log("MAKE ALL UL’s SORTABLE");
    $(function() {

        // jqueryUI. Cards are now sortable across columns, and up and down.
        
        $('.sortable').sortable({
            connectWith: '.sortable'
        }).disableSelection();
    });

    var kanban = new app.kanbanApp.kanban();


    $('#add').click(function(ev) {
        ev.preventDefault();

        card1 = new card();
        card1.setName($('#name').val());       
        card1.setColumn($('#column').val());
        
        kanban.addCard(card1);
        observeChanges();
    });

    var ids = [];
    function observeChanges() {
        var cards = kanban.getCards();
        var col1 = $('#1');
        var col2 = $('#2');
        var col3 = $('#3');
        var col4 = $('#4');
        cards.forEach(function(c) {       
            var isExist = ids.filter(function(id) {            
                return id === c.getId();
            });
            if (isExist.length<=0) {
                switch (c.getColumn()) { 
                    case 1:
                        col1.append('<li>'+c.getName()+'</li>');
                    break;
                    case 2:
                        col2.append('<li>'+c.getName()+'</li>');
                    break;
                    case 3:
                        col3.append('<li>'+c.getName()+'</li>');
                    break;
                    case 4:
                        col4.append('<li>'+c.getName()+'</li>');
                    break;
                }
                ids.push(c.getId());
            }
        }); // end of Foreach loop.
    } // end of fn observeChanges
}(app));
