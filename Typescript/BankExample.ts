interface Iaddress{
    flatno:number;
    street:string;
    locality:string;
    city:string
}
interface IcustAccount{
    accountNum:number;
    Balance:number;
    
}
enum bankname{
    HDFC,ICICI,INDIAN
}
interface Ibank{
    name:bankname;
    branch:branch;
    Address:Iaddress;
    
}
interface bankProcess
{
}
interface IcustomerDet{
    name:string;
    Address:Iaddress;
}
enum branch{
    DOMLUR,
    EJIPURA,
    KORAMANGALA,
}
class Bank implements bankProcess{ 
    static accdigit=100;
    customerReqBank:Ibank;
    custData:IcustomerDet
    constructor(custData:IcustomerDet,customerReqBank:Ibank)
    {
       this.custData=custData
       this.customerReqBank=customerReqBank;
    }
    createAccountRequest()
    {
        Bank.accdigit++;
        //let accountNumber:string=Bank.accdigit+branch[this.customerReqBank.name-1];
        console.log(this.customerReqBank.name);
        console.log(this.custData);
        console.log(this.customerReqBank);


    }
    Display()
    {
        console.log(`bankDetails:${this.customerReqBank}`)
    }

}
class customer
{
    customerData:IcustomerDet;
    customerReqBank:Ibank;
    constructor(customerData:IcustomerDet,customerReqBank:Ibank)
    {
        this.customerData=customerData;
        this.customerReqBank=customerReqBank;
    }
    createAccount()
    {
        let acc=new Bank(this.customerData,this.customerReqBank)
        acc.createAccountRequest();
    }
    Display()
    {
        console.log(`bankDetails:${this.customerData.name}`)
        console.log(`bankDetails:${this.customerData.Address.city}`)
    }
    
}

let customername:IcustomerDet={
    name:"sandeep",
    Address:{
        flatno:10,
        street:"20th h cross",
        locality:"ejipura",
        city:"bangalore"
    }
    }
    let customername2:IcustomerDet={
        name:"sugumaran",
        Address:{
            flatno:10,
            street:"20th h cross",
            locality:"ejipura",
            city:"bangalore"
        }
        }
let bankRequired:Ibank={
    name:bankname.HDFC,
    branch:branch.DOMLUR,
    Address:{
        flatno:20,
        street:"airport road",
        locality:"Domlur",
        city:"bangalore"
    }

}
let bankRequired2:Ibank={
    name:bankname.ICICI,
    branch:branch.DOMLUR,
    Address:{
        flatno:30,
        street:"airport road",
        locality:"Domlur",
        city:"bangalore"
    }

}
let cust1=new customer(customername,bankRequired);
let cust2=new customer(customername2,bankRequired2);
cust1.createAccount();
cust2.createAccount();