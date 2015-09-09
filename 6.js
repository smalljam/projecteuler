var sum = 0;
var sum_sq = 0;
for(var i = 1;i<101;i++){
	sum += i;
	sum_sq += i*i;
}
console.log(sum*sum - sum_sq)
