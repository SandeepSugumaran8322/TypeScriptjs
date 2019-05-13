class Shape
{
    area:number;
    length:number;
    breadth:number;
    constructor(len:number,bre:number)
    {
        this.length=len;
        this.breadth=bre;
    }
    Area()
    {
        console.log("Please perform the calculation part for the shape you defined");
    }
    Display(mes:string)
    {
        console.log(`Area of ${mes} is : ${this.area}`);
    }
    
}
class cube extends Shape
{
    width:number;
    constructor(len:number,bre:number,width:number)
    {
        super(len,bre);
        this.width=width;

    }
    Area()
    {
        console.log(`length ${this.length} and breadth ${this.breadth} and width ${this.width}`);
        this.area=this.length*this.breadth*this.width;
        this.Display("cube")
    }
} 
class square extends Shape
{
    
    constructor(len:number,bre:number)
    {
        super(len,bre);
        

    }
    // Area()
    // {
    //     console.log(`length ${this.length} and breadth ${this.breadth} and width ${this.width}`);
    //     this.area=this.length*this.breadth*this.width;
    //     this.Display("cube")
    // }
} 
let cub=new cube(10,20,30);
cub.Area();
let sq=new square(10,20);
sq.Area();