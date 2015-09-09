function Euler3(n) {
	for (var i = 2; i<100000; i++){
		if( n % i == 0 ) {
			b = n/i
			console.log(n+' % '+i+' is '+b);
			n = b;
			i = 2;	
		}
	}
}

Euler3(600851475143);
