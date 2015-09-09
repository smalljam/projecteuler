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
var P = 0;
while(P < 2000000){
  P = primes[index-1]+1;
  while( !isPrime(P) ){
    P += 1;
  }
  console.log(P);
  primes.push(P);
  index = primes.length;
}

if( primes[index-1] >= 2000000 ) {
  index -= 1;
}

console.log('PRIMES(index,length):', index, primes.length);
var sum = 0;
for(var j = 0; j < index; j++) {
  sum += primes[j]
}
console.log(sum);
