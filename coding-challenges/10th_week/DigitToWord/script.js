
let numberToWord = (number)=>{
    let wordArray=['zero','one','two','three','four','five','six','seven','eight','nine'];
    let stringNumbers=number.toString().split("");

    let numberArray=stringNumbers.map(function(strings){
        return parseInt(strings);
    });

    let word=numberArray.map(function(numbers){
        return wordArray[numbers];
    });

    console.log(word.join(" "));

}


numberToWord(1234);