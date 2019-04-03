//Program to generate fibbonaci series

function fibbonaci(n){
	a=0;b=1;f=1;
	console.log(a);
    console.log(b);
	for(i=0;i<=n;i++){
		f=a+b;
		a=b;
		b=f;
		console.log(f);
	}
	
}

fibbonaci(10);