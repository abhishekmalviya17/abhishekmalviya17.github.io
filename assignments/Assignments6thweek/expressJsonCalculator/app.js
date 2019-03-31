'use strict'
var express=require('express');
var app=express();

app.post('/add',function(req,res){
    var n1=req.body.n1;
    var n2=req.body.n2;
    var sum=parseInt(n1)+parseInt(n2);
    var addData={
        num1:n1,
        num2:n2,
        result:sum
    }
    res.json(addData);
});

app.post('/sub',function(req,res){
    var n1=req.body.n1;
    var n2=req.body.n2;
    var diff=parseInt(n1)-parseInt(n2);
    var subData={
        num1:n1,
        num2:n2,
        result:diff
    };
    res.json(subData);
});
app.post('/mul',function(req,res){
    var n1=req.body.n1;
    var n2=req.body.n2;
    var prod=parseInt(n1)*parseInt(n2);
    var mulData={
        num1:n1,
        num2:n2,
        result:prod
    };
    res.json(mulData);
});
app.post('/div',function(req,res){
    var n1=req.body.n1;
    var n2=req.body.n2;
    var quo=parseInt(n1)/parseInt(n2);
    var divData={
        num1:n1,
        num2:n2,
        result:quo
    };
    res.json(divData);
});



app.listen(3000);