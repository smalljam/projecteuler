function isPalindrome(n){
	var l = Math.floor(n.length / 2);
	for( var i =0; i < l; i++ ) {
		if( n[i] != n[n.length-i-1] ){
			return false;
		}
	}
	return true;
}

max_p = 0;
for(var i = 100; i < 1000; i++){
	for(var j = 100; j < 1000; j++){
		var x = i*j;
		if( isPalindrome(x+'') ){
			if(x > max_p){
				max_p = x;
			}
		}
	}
}
console.log(max_p);
