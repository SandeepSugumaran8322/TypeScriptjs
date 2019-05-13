let actual:string="sandeep";
let reversedString:string="";
let len:number=actual.length;
for(let i:number=actual.length-1;i>=0;i--)
{
reversedString=reversedString.concat(actual.charAt(i));
}
console.log(`Actual string: ${actual}\nReversed String: ${reversedString}`);