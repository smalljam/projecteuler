function findDivisors(num){
  var d = [num];
  for(var i = num; i > 0; i--){
    if( num % i == 0 ){
      d.push(i)
    }
  }
  console.log(num, d.length);
  return d;
}

var N = 46817326;
var i = 9676;

while( findDivisors(N).length < 501 ) {
  i++;
  N = i + N;
}

console.log('DONE:', N);
