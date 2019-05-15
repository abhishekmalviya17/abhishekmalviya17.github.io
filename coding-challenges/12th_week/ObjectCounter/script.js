let globalCounter=0;
let newObject={
    counter : 0 

}

var increaseCounter = function () 
{
    var counter = 0;
    return function () 
    {
        counter =counter + 1; 
        return counter;
    }
  }
$(document).ready(function(){
    $("#globalBtn").click(function(){
        globalCounter=globalCounter+1;
        $("#globalLabel").text(globalCounter);
    
    });
    $("#objectBtn").click(function(){
        newObject.counter=newObject.counter+1;
        $("#objectLabel").text(newObject.counter);
    
    });
    $("#closureBtn").click(function(){

        increaseCounter();
        $("#closureLabel").text(increaseCounter());
    
    });
  });