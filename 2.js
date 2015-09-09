numbers = [1, 2]
n = 2;
i = 0;
while( n < 4000000 ) {
	n = n + numbers[i];
	numbers.push(n);
	i++;
}
var sum = 0;
for(var j=0; j < numbers.length; j++) {
	if (numbers[j] % 2 == 0) {
		sum += numbers[j];
	}
}

console.log(sum);
