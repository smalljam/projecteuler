for(i = 2520; i < 2*3*4*5*6*7*8*9*10*11*12*13*14*15*16*17*18*19*20; i++){
	var dividible = true;
	for( var j = 1; j<21; j++ ){
		if( i % j != 0 ){
			dividible = false;
		}
	}
	if(dividible){
		console.log(i);
	}
}
