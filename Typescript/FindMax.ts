let array1:number[]=[-1,-10,-30,-1,-3,-8,-37];
let array2:number[]=[-1,-10,-30,-1,-3,-8,-37];
let array3:number[]=[-1,-10,-30,-1,-3,-8,-37];
let array4:number[]=[-1,-10,-30,-1,-3,-8,-37];
let max:number;
max=array1[0];
for(let val of array1)
{
    
    if(val>max)
    {
        max=val;
    }
}
console.log(`Max value:${max}`);
//sorting the numbers 
function compare(v1:number,v2:number):number
{
    if(v1>v2)
        return 1;
    return -1;
}
array1.sort(compare);
console.log(array1);
//other way of passing function as paramter
array2.sort(function comp(v3:number,v4:number):number
{
    return v3>v4?1:-1;
});
console.log(array2);
//implementing the same with arrow function
array3.sort((v5:number,v6:number):number=>{
    return v5>v6?1:-1;
})
//other ways 
array4.sort((v7,v8)=>{return v7>v8?1:-1});