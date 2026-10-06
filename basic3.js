//var - global level/functional
//let global level/block level {}
//const - 
const greet="Evening"
//greet="night"
if (1==1)
{
    const greet="Afternoon"
}
function add(a,b)
{
    let greet="Morning"
    return a+b
}

let sum=add(2,3)
console.log(sum)
console.log(greet)

