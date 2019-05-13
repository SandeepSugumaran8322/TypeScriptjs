class Employee
{
   private fullName:string
   Address:string
    constructor()
    {
        this.fullName="John smith"
        this.Address="Banglore"
    }
}
class Company extends Employee{
     Display()
    {
        console.log(this.fullName);
    }
}
let obj1=new Company()
let obj2=new Company()
obj1.Display()
obj2.