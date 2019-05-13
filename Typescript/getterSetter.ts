class getterSetter
{
    private _fullName:string;
    get fullName()
    {
        return this._fullName;
    }
    set fullName(fname:string)
    {
        if(fname!="")
        {
            this._fullName=fname;
        }
    }
}
let gs=new getterSetter();
gs.fullName="sandeep";
console.log(gs.fullName);