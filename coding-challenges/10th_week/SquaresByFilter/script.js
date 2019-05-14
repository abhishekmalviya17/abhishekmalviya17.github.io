var numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48];

var squareOfNumber=function(array){
   var squareArray=array.filter(function(number)
    {
    return number%2==0;
    }).map(function(evenNumber)
    {
    return evenNumber*evenNumber;
    });
    console.log(squareArray);
}

squareOfNumber(numbers);

var square=function(array){
    var evenNumbers=[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            evenNumbers.push(array[i]);
        }
    }
    var squareArray=[];
    for(let i=0;i<evenNumbers.length;i++){
        squareArray.push(evenNumbers[i]*evenNumbers[i]);

    }
    console.log(evenNumbers);
}

square(numbers);