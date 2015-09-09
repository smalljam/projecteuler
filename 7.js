var primes = [2, 3, 5, 7, 11, 13];
var index = primes.length;
function isPrime(P){
	for( var i = 0; i<primes.length; i++ ){
		if( P % primes[i] == 0 ){
			return false;
		}
	}
	return true;
}
while(index < 10002){
	P = primes[index-1]+1;
	while( !isPrime(P) ){
		P += 1;
	}
	primes.push(P);
	index = primes.length;
}
console.log(primes[10000]);
