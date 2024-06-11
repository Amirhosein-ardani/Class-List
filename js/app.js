alert("Hello,welcome to the websit of IT Mabna scores");
const userInformation ={
    name:prompt("what is your name?"),
    lastName:prompt("what is yuor lastname?"),
    age:prompt("how old are you?"),
    gender:confirm("Are you male?")
    
}
if(userInformation.age>=18){
    alert("you have full access")
}
else{
    alert("don't have access")
}
console.log(userInformation);

