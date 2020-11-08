let num=prompt("Please write any number");
if (num % 2 == 0) {
    alert(`It's a even number`);
}else {
    alert(`It's a odd number`);
}
let num1=prompt("write a number")
let num2=prompt("write another number")
if (num1 > num2) {
    alert(num1);
}else {
    alert(num2);
}
let houseName=prompt("House name")
let name1=("Arya")
let arya=("Winter is coming")
let name2=("Lannister");
let lannister=("A lannister always pays his debt")
let all=("All men must die")
if (houseName == name1) {
    alert(arya);
}else if(houseName == name2) {
    alert(lannister);
}else {
    alert(all)
}
let month=prompt("Write any month and we will tell you how many days it holds")
let january=("january")
let march=("march")
let may=("may")
let july=("july")
let august=("august")
let october=("oct0ber")
let dec=("december")

let febuary=("febuary")
let april=("april")
let june=("june")
let sep=("september")
let nov=("november")

switch (month) {
    case january:
    case march:
    case may:
    case july:
    case august:
    case october:
    case dec:
        alert("31")    
        break;
    case april:
    case june:
    case sep:
    case nov:
        alert("30");
        break;
    case febuary:
        alert("28 and 29 on leap years");
        break;
    default:
        alert("Error")
}
let salery=prompt("Tell your salery")
switch (true) {
    case salery > 20000:
        alert(salery / 10)
        break;
    case salery < 40000:
        alert(salery / 20);
        break;
    case salery > 50000:
        alert(salery / 30)
        break;
    default:
        console.log("salery, default", salery)
        alert("do not support this much amount")
}
let marks=prompt("Your marks")
if (marks > 100) {
    alert(`Marks can't be greater than 100`)
}else if(marks > 80) {
    alert("Grade A")
}else if(marks > 50) {
    alert("Grade B")
}else if (marks > 30)  {
    alert("Grade C")
}else if (marks > 0) {
    alert("Grade D")
}

switch (true) {
    case marks > 100:
        alert(`Marks can't be greater than 100`)
        break;
    case marks > 80:
        alert("Grade A")
        break;
    case marks > 50:
        alert("Grade B")
        break;
    case marks > 30:
        alert("Grade C")
        break;
    case marks > 0:
        alert("Grade D")
        break;
    default:
        alert('error')
        break;
}

let weather=prompt("What is the weather like?")
let sun=(`sunny`)
let sunny=(`Wear a t-shirt`)
let rain=(`rainy`)
let rainy=(`Don't forget to take your raincoat`)
let hot=(`hot`)
let hanky=(`Get a hanky`)
let cold=(`freezing`)
let freezing=(`Get your sweater on`)

if (weather == sun) {
    alert(sunny)
}else if(weather==rain){
    alert(rainy)
}else if(weather==hot){
    alert(hanky)
}else if (weather==cold){
    alert(freezing)
}else{
    alert("Invalid input")
}

switch (weather) {
    case sun:
        alert(sunny)
        break;
    case rain:
        alert(rainy)
        break;
    case hot:
        alert(hanky)
        break;
    case cold:
        alert(freezing)
    default:
        alert("Invalid input")

}




















