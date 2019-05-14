class MyArray{
    constructor(array)
    {
            this.print = ()=>
            {
                array.forEach(element => {
                console.log(element);
                });
            }

            this.searchValue=(value)=>
            {
                console.log("The index is "+ array.indexOf(value));
            }
            
            this.sort=()=>
            {
                console.log(array.sort(function(a, b){return a-b}));
            }
    }
}

let NewArray=new MyArray([1,2,6,5,9,65,20]);
NewArray.print();
NewArray.searchValue(2);
NewArray.sort();