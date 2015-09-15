var first = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten'
];
var teen = [
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen'
];
var dozens = [
	'twenty',
	'thirty',
	'forty',
	'fifty',
	'sixty',
	'seventy',
	'eighty',
	'ninety'
];
function numberToWords(num){
	if( num < 11 ) {
		return first[num-1];
	}
	if( num < 20 ) {
		return teen[num-11];
	}
	if( num < 100 ) {
		var str = dozens[Math.floor(num/10)-2];
		if( num % 10 != 0 ) {
			str += '-'+first[(num % 10) - 1];
		}
		return str;
	}
	if( num < 1000 ) {
		var str = numberToWords(Math.floor(num/100))+' hundred';
		var s = numberToWords(num % 100);
		if( s ) {
			str += ' and '+s;
		}
		return str;
	}
	if( num == 1000 ) {
		return 'one thousand';
	}
}
var S = 0;
for(var i = 1; i < 1001; i++){
	var ss = numberToWords(i).replace(/[\s-]/g,'');
	if( i == 342 || i == 115 ) {
		console.log(i, ss.length)
	}
	S += ss.length;
}
console.log(S);