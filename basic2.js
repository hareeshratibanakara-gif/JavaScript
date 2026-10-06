var marks=Array(6)//or
var marks=new Array(20,30,40,50,60,70)
var marks=[20,30,40,50,60,70]
/*
submarks=marks.slice(2,5) // print the value of index 2 to 4
console.log(submarks)


console.log()
console.log(marks[2])//40
marks[3]=49
console.log(marks)
console.log(marks.length)//6
marks.push(65)// add the element at end
console.log(marks)//[20, 30, 40, 49,60, 70, 65]
marks.pop()  // remove the one end value
console.log(marks)//[ 20, 30, 40, 49, 60, 70 ]
marks.unshift(19)// addds the value the begining
console.log(marks)
marks.shift()// remove the value at the begining
console.log(marks)
console.log(marks.indexOf(70)) // index of value
// 120 is present in array?
console.log(marks.includes(120))
//console.log(marks.includes(70))
marks.slice(2,5)

var marks=[20,30,40,50,60,70]
var sum=0
for (let i=0;i<marks.length;i++)
{
    //console.log(marks[i])
    sum=sum+marks[i]
}
console.log(sum)
//reduce fiter map
let total=marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)
var scores=[12,13,14,16]
// Create new array with even numbers of scores array [12,14,16]
var evenScores=[]
for (let i=0;i<marks.length;i++)
{
if(scores[i]%2==0)
{
evenScores.push(scores[i])
}
}
console.log(evenScores)
//filter
let newFilterEvenScores=scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)
*/
//map
//Create a new array with  even numbers of scores and multiply each value with 3array[12,13,14,16]
/*
var scores=[12,13,14,16]
var evenScores=[]
for (let i=0;i<marks.length;i++)
{
if(scores[i]%2==0)
{
evenScores.push(scores[i])
}
}
console.log(evenScores)
let newFilterEvenScores=scores.filter(score=>score%2==0)
console.log(newFilterEvenScores) //[12,14,16]=>[36,42,48]
//map
var mappedArray=newFilterEvenScores.map(scores=>scores*3) 
console.log(mappedArray)
let totalVal=mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)


var scores1=[12,13,14,16]
let sumValue=scores1.filter(scores=>scores%2==0).map(scores=>scores*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue)
*/
/*
let fruits=["banana","mango","pomogrante","apple"]
console.log(fruits.sort())
console.log(fruits.reverse())

var scores1=[12,003,16,15]
// scores1.sort()
// console.log(scores1.sort())
//scores1.sort(function(a,b){
// return a-b
// })
console.log(scores1.sort((a,b)=>a-b))
console.log(scores1.sort((a,b)=>b-a))
*/
//Functions
//block of code
function add(a,b)
{
return a+b;
}
let sum=add(2,3)
console.log(sum)

//do not have name => anyonumus function--Fumction expression

let sumOfIntegere=function(c,d)
{
    return c+d
}
//Only Anoynimus functions can be assined to variable
//=>Fact
let sumOfNumbers=(c,d)=> c*d

console.log(sumOfNumbers(2,3))







