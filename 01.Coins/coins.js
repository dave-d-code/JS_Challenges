

// TODO: cycle through the array using for loop
// TODO: if control statement using RegEx 'Coin'
// TODO: RegEx to filter out array elements based on rules coin, int and positive number.
// TODO: place numbers in array, count starting at the end of the array.. 2nd function to count & multiply according to position.
// vars to keep track, then display vars lets give it a go.



var array1 = ['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1'];
var array2 = ['coin one', 'coin two', 'coin five', 'coin ten', 'coin twenty', 'coin fifty', 'coin hundred', 'cigars 1'];
var array3 = ['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1', 'coin -9'];

// main function
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



// filter function to filter out elements  block code

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

countCoins(array3);