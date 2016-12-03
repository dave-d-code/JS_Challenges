
// Coins array placed here to test code. added negative coins in array 3 to cover all tests.

var array1 = ['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1'];
var array2 = ['coin one', 'coin two', 'coin five', 'coin ten', 'coin twenty', 'coin fifty', 'coin hundred', 'cigars 1'];
var array3 = ['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1', 'coin -9'];


/* Cycles through coin array, calls fn filterArray to filter non coin elements,
* adds up the relevant coins. Returns results as a string.
* @param {Array} coinsArray
* @return {String} outputStr
*/
function countCoins(coinsArray) {
	var actualCoins,
		outputStr,
		goldCoins = 0,
		silverCoins = 0,
		bronzeCoins = 0;

	for (var i = 0; i < coinsArray.length; i++) {
		actualCoins = filterArray(coinsArray[i]);
		if (actualCoins) {
			bronzeCoins += actualCoins >= 1 ? (actualCoins % 10) : 0;
			silverCoins += actualCoins >= 10 ? (Math.floor(actualCoins % 100))/10 : 0;
			goldCoins += actualCoins >= 100 ? Math.floor(actualCoins / 100) : 0;
			}
	}

	outputStr = 'Gold: ' + goldCoins + '\n';
	outputStr += 'Silver: ' + silverCoins + '\n';
	outputStr += 'Bronze: ' + bronzeCoins + '\n';

	console.log(outputStr);

}



/* To filter out non coin elements based on set of rules
* - must be 'Coins' and a positive integer number only.
* Separate function to allow adding of more rules if needs be
* @param {String} element
* @return {boolean/ float} number
*/

function filterArray(element) {
	var number;

	if (!(/^coin/g.test(element) && /[0-9]/g.test(element))) {
		return false;
	}

	number = parseFloat((element.match(/[0-9.-]/g)).join(''));

	if (number < 0 || (number % 1 !== 0)) {
		return false;
	}

	return number;
	
}

countCoins(array1);
countCoins(array2);
countCoins(array3);