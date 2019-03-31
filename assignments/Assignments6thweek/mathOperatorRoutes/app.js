var express=require('express');
var app=express();


app.get("/add/:n1/:n2",function(req,res){
    var n1=req.param.n1;
    var n2=req.param.n2;
    var sum=parseInt(n1)+parseInt(n2);

    res.send("<h1> The sum of "+n1+" and "+n2+" is "+sum+"</h1>");
    
});
app.get("/sub/:n1/:n2",function(req,res){
    var n1=req.param.n1;
    var n2=req.param.n2;
    var diff=parseInt(n1)-parseInt(n2);

    res.send("<h1> The sum of "+n1+" and "+n2+" is "+diff+"</h1>");
});
app.get("/mul/:n1/:n2",function(req,res){
    var n1=req.param.n1;
    var n2=req.param.n2;
    var product=parseInt(n1)*parseInt(n2);

    res.send("<h1> The product of "+n1+" and "+n2+" is "+product+"</h1>");
});
app.get("/div/:n1/:n2",function(req,res){
    var n1=req.param.n1;
    var n2=req.param.n2;
    var quotient=parseInt(n1)/parseInt(n2);

    res.send("<h1> The quotient of "+n1+" and "+n2+" is "+quotient+"</h1>");
});





app.listen(3000);