
let age:number=50;
if(age<50)
{
    console.log("less than 50");
}
else if((age>=50)&&(age<=70))
{
    console.log("between 50 to70");
}
else {
    console.log("greater than 70");
}

//Switch case:
let direct:number=0;
switch(direct)
{
    case 0:
    console.log("going up");
    break;
default:
    console.log("Nothing...")
}
enum DirectionA{
    UP,DOWN,LEFT,RIGHT
}
let directi:DirectionA=0;
switch(directi)
{
    case DirectionA.UP:
    console.log("going up");
    break;
default:
    console.log("Nothing...")
}