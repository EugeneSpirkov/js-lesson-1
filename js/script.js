	var base = +prompt('Введите целое число больше нуля');
	var exp = +prompt('Введите степень');

function pow(x, n) {
	var result = x;

	for (var i=1; i < n; i++) {
		result *= x;
	}
	return result;
}
var powResult = pow(base, exp);
alert(powResult);
