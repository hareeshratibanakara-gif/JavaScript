const flag=!true;//!false->true,!true->false

if(!flag){
//console.log("condition satisfied")
}
else{
//console.log("condition not satisfied")
}
//console.log(!flag)
let i=0
while(i>1){
i++// i=i+1
//console.log(i)
}
do{
i++
}while(i>10);
//console.log(i)
//2 and 5
//from 1 to 10 give me common multiple of 2 & 5
let n=0
for (let k=1;k<=10;k++)
{
if(k%2==0 || k%5==0)
{
    n++
    console.log(k)
    if(n==3)
    break    
}

}

let required=true//while loop will run for true boolean //while loop will not run for false boolean
while(required)
{
//console.log(required)
required=false
}

