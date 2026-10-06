// Inheritence is the Main pillar in the object oriented programming 
// one class can inherit/acquire the properties,Methods of another class
// The class which inherits the properties of other is known as subclass(derived class,child class)
// The class whose properties are inherited is known as superclass
const Person=require("./basic6")
class Pet extends Person
{
    get location()
    {
        return "BlueCross"

    }
    constructor(fistName,lastName)
    {
        //call parent class constructor
        super(fistName,lastName)


    }
}
let pet = new Pet("sam","san")
pet.fullName()
console.log(pet.location)













