var app = app || {};
app.kanbanApp = app.kanbanApp || {};

/* creates kanban object, which recieves array of card objects
* @class
*
*/

app.kanbanApp.kanban = function app_kanbanApp_kanban() {};

app.kanbanApp.kanban.prototype = {

	_cards : [],

	addCard : function addCard (card) {
		this._cards.push(card);
	},

	getCards : function getCards () {
		return this._cards;
	}

}; // end of class/ constructor prototype kanban