var S = 1000000 - 1;
var maxChain = 0;
var NUM = 0;
for(var i = S; i > 1; i--){
  var l = doChain(i);
  if( l > maxChain ) {
    maxChain = l;
    NUM = i;
    console.log(NUM, maxChain);
  }
}

console.log('DONE');

function doChain(N){
  var chain = [];
  while( N != 1 || chain.indexOf(N) < 0 ) {
    if( N % 2 == 0 ) {
      N = N/2;
    } else {
      N = 3*N + 1;
    }
    chain.push(N);
  }
  return chain.length;
}
