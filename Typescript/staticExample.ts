class Person1
{
    static count:number=0;
    static getPersonCount()
    {
        return Person1.count;
    }   
    constructor()
    {
        Person1.count++;
    }
}
let per1=new Person1()
let per2=new Person1()
console.log(Person1.getPersonCount());