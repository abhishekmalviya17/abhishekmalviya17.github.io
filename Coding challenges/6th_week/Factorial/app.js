'use strict'
var factorial=function(n){
    var res=n;
    for(var i=n-1;i>0;i--){
        res=res*i;
    }
    console.log("The Factorial of "+n+" is "+res);
}

factorial(5);