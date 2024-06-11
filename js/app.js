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
const userOne = {
    Name:"Amirhossein-Adani",
    classActivity:"A(plus)",
    Handout:"A(nedative)",
    Exam:"B(nedative)",
    Over:"A(nedative)",
}
const userTwo={
    Name:"Ashkan-Bahar",
    classActivity:"C(plus)",
    Handout:"B(nedative)",
    Exam:"C(plus)",
    Over:"B(nedative)",
}
const userThree={
    Name:"Mahdi-nejad",
    classActivity:"A(plus)",
    Handout:"B(plus)",
    Exam:"c(plus)",
    Over:"B(plus)",
}
const userFor={
    Name:"Amirmahdi-Rahimzadeh",
    classActivity:"A(plus)",
    Handout:"B(plus)",
    Exam:"c(plus)",
    Over:"B(nedative)",
}
const userFive={
    Name:"Mohammadi",
    classActivity:"c(nedative)",
    Handout:"c(nedative)",
    Exam:"c(nedative)",
    Over:"c(nedative)",
}
let users=[userOne,userTwo,userThree,userFor,userFive,userInformation ];
for( key of users){
    console.log(key)
}
