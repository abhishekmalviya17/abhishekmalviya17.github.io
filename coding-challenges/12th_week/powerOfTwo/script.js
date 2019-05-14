let isPowerOfTwo=(number)=>{
  let num=number;
  let mod;
  while(number>=2){
    mod=number%2;
    number=number/2
     
  }
  if(mod==0){
    console.log(num+" is a power of two");
  }
  else{
    console.log(num+" is not a power of two");
  }
}

isPowerOfTwo(256);