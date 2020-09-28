class command{
    id:number
    name:string
    constructor(id:number, name:string)
    {
        this.id = id
        this.name = name

    }
    display()
    {
        console.log("My name is "+this.name+" and my id is"+this.id)
    }
}

let command1 = new command(1,"d")
console.log(command1.display())
//TO DO Connect with mySql Db
