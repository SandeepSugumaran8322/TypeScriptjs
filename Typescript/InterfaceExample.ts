interface Ipayment{
    Transacation(amount:number,refNum:string,userId:number):number;
    ReversePayment(transId:Number):boolean;
}
let  obj={
    name:"abc",
    display:function()
    {
        console.log(this.name);
    }
}
console.log(obj.display());
console.log(obj.name);