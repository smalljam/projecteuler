/*
  a^2 + b^2 = c^2
  a + b + c = 1000
  c = 1000 - (a + b)

  1000^2 - 2*1000*(a+b) + (a+b)^2 = a^2 + b^2
  1000^2 - 2000*a - 2000*b + a^2 + 2ab + b^2 = a^2 + b^2
  1000^2 - 2000*a - 2000*b + 2ab = 0
  1000^2 - 2000*a = b(2000 - 2a)

  b = 1000*(500 - a)/(1000 - a)
  c = 1000 - (a + 1000*(500 - a)/(1000 - a))
*/

var a,b;
function findMul(num) {
  for (a = 1; a < num/2; a++){
    b = num*(num/2-a)/(num-a);
    if (b % 1 == 0)
      return a*b*(num-a-b);
  }
  return -1;
}

console.log(findMul(1000));
console.log(a,b,1000-a-b)
