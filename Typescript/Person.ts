interface Iperson{
    name1?:string;//?optional
    Id:number;
    Role:role;

}
enum role{
    ENGINEER,DOCTOR
}
class Person
{   
    Persondata:Iperson;
      constructor(data:Iperson)
      {
          this.Persondata=data;

      }
      Display()
      {
          console.log(`id:${this.Persondata.Id} name:${this.Persondata.name1} and role:${role[this.Persondata.Role]}`);
      }
}
let person1Data:Iperson={
//name1:"sandeep",
Id:1,
Role:role.DOCTOR
}
let person1=new Person(person1Data);
person1.Display();