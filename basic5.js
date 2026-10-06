//Objects is collection of properties
//property can be defined in key value pair, key will always be string, value can be any data type

let person={
    firstName:'Tim',
    lastName:'Joe',
    age: 24,
    fullName:function()
    {
        console.log(this.firstName+this.lastName)
    }

}
console.log(person.fullName())//TimJoe
console.log(person.lastName)//Dot Notanation//Joe
console.log(person['lastName'])//Joe
person.firstName='Tim Dane'
console.log(person.firstName)//Tim Dane
person.gender='male'
console.log(person)//{ firstName: 'Tim Dane', lastName: 'Joe', gender: 'male' }
delete person.gender
console.log(person)//{ firstName: 'Tim Dane', lastName: 'Joe' }
console.log('gender' in person)//false

//print the all the values of the object
for(let key in person)
{
    console.log(person[key])
}




