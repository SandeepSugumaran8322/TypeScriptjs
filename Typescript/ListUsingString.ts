let str:any;
str=["sandeep","roshan","mei","dina"];
console.log(str.indexOf("roshan"));
console.log(str);
console.log(str.length);
/*output
Sandeeps-MacBook-Air:Typescript sandeep$ node ListUsingString.js 
1
[ 'sandeep', 'roshan', 'mei', 'dina' ]*/
str.push("Ragava");
console.log(str);
str.pop();
console.log(str);
str.sort();
console.log(str);
/*[ 'sandeep', 'roshan', 'mei', 'dina', 'Ragava' ]
[ 'sandeep', 'roshan', 'mei', 'dina' ]
[ 'dina', 'mei', 'roshan', 'sandeep' ]
*/
console.log(str.includes("ragava"));
console.log(str);
str.splice(2,4);
console.log(str);
str.splice(2,0,'sandeep', 'roshan');
console.log(str);
str.splice(3,1,'saranya');//to replace
console.log(str);