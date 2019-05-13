let array:number[]=[-1,-1,1,0,0,-2,-1]
let largestNum:number=array[0];
let smallestNum:number=array[0];
for(let val of array)
{
    if(val>largestNum)
    {
        largestNum=val
    }
    else
    if(val<smallestNum)
    {
        smallestNum=val;
    }
}
console.log(`largest value :${largestNum}`);
console.log(`smallest value :${smallestNum}`);
