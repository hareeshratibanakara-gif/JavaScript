function sayHello(){
    return('Hello World')
}
//Function Expresation
let message=sayHello()
console.log(message)
//Function Declaration
function multiadd(a,b){
return a*b;
return a+b;
}

let multiRe=multiadd(2,5);
let multiRe2=multiadd(10,5);
console.log(multiRe);
console.log(multiRe2);
//Arrow Function
const multi2=(x,y)=>(x*y);
console.log(multi2(2,7));
const ArrowFunctio=()=>("Arrow Function");
console.log(ArrowFunctio);
const paranth=g=>(g*g);
console.log(paranth(5))
const stringParanth=val=>"hello"+val;
console.log(stringParanth("world"));