//Program to generate fibbonaci series

function fibbonaci(n){
	firstnum=0;secondnum=1;sum=1;
	console.log(a);
    console.log(b);
	var series=[]
	for(i=0;i<=n;i++){
		sum=firstnum+secondnum;
		series.push(sum);
		firstnum=secondnum;
		secondnum=sum;
		
	}
	return sum;
	
}

fibbonaci(10);