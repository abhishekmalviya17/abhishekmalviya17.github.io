'use strict'

var fs=require('fs');


// Write message into file 
var messageWriter = function (fileName, message, n) {
        var content="";
        for(var i=0;i<n;i++){
            content=content+message;
        }
        fs.writeFile(fileName, content, function (error) {
            if (error){
                throw error;
            } 
            console.log("File Written!");
        })
  

}

messageWriter("hello.txt", "Welcome to AttainU\n", 100);