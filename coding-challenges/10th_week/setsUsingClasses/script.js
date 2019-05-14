class MyArray
{
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
class MySet
{
    constructor(set)
    {
        this.set=new Set(set);
        this.print=()=>{
           console.log(this.set);

        }
        this.search=(value)=>{
          console.log("The index of passed element is="+set.indexOf(value));
        }
    }


}

let newSet=new MySet([1,5,9,78,1,5,26]);
newSet.print();
newSet.search(26);


let NewArray=new MyArray([1,2,6,5,9,65,20]);
NewArray.print();
NewArray.searchValue(2);
NewArray.sort();