function squareOfNumber(num){
var sqArray=[];
console.log(sqArray);
for(var i=0;i<num.length;i++){
if(num[i]%2==0){

sqArray.push(num[i]*num[i]);
}
console.log(sqArray);
}
}

squareOfNumber([11,22,45,32,12,52,68,23,14,61,10]);

function squareByFunctional(num){
var sqArray=num.filter(function(number){return number%2==0}).map(function(number){return number*number});
console.log(sqArray);
}



squareByFunctional([11,22,45,32,12,52,68,23,14,61,10]);
