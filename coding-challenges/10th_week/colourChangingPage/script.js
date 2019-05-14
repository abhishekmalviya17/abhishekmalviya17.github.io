document.body.style.backgroundColor = "red";

var time = 5000;

function changeColour() 
{
   
    if(document.body.style.backgroundColor == "red")
    { 
        document.body.style.backgroundColor = "green"
    }else
    { 
        document.body.style.backgroundColor = "red"
    }
}
var Timer = setInterval(changeColour,time);

var slowBtn = document.getElementById("slowBtn");
slowBtn.addEventListener("click",function()
{
    clearInterval(Timer);
      time = time / 2;
      Timer = setInterval(changeColour,time);
});

var fastBtn = document.getElementById("fastBtn");
fastBtn.addEventListener("click",function()
{
    clearInterval(Timer);
    time = time * 2;
    Timer = setInterval(changeColour,time);
});