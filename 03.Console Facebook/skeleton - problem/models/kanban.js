var app = app || {};
app.kanbanApp = app.kanbanApp || {};

/* comment code block to go here
*
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