// var name = "Adwait";
// var age = 23;
// var shootingScore = 45.6;

// var message = "Hi my name is "+ name + " and I am " + age + " years old! ";

// var firstName = "John";
// var lastName = "JacobJingleHeimerSmith";
// var dateOfBirth = "10-09-82";
// var age = 23;
// var profileImgUrl = 'http://coolpicks.com/johnjacob.jpg';

// var loginWelcomMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";

// console.log(loginWelcomMessage);

// var sum = 10 + 15;
// var sub = 15 - 10;
// var mul = 10 * 3;
// var div = 10 / 3;
// var mod = 10 % 3;

// var msg = "10 / 3 = 3 with a remainder of " + mod;

// var result = 10 * ((5 + 3) - 4);

// console.log(result);

// var age = 23;
// var joesAge = "23";

// if(age === joesAge) {
//     console.log("I'm the same age as Joe!");
// }
// else {
//     console.log("One of these is not like the other...");
// }

// if (1===1 && 2===2) {
//     console.log("These are both true!");
// }

// if (true && false) {
//     console.log("These are each different!!");
// }

// var cat1 = 5;
// var cat2 = 10;
// var cat3 = 1;

// if(cat1>cat2 && cat1>cat3) {
//     console.log("Cat 1 is the cutest");
// }
// else if(cat2>cat1 && cat2>cat3) {
//     console.log("Cat 2 is the cutest");
// }
// else if(cat3>cat1 && cat3>cat2) {
//     console.log("Cat 3 is the cutest");
// }

// var students = ["Timmy", "Janessa", "Arun"];

// var naughtyList = [];
// naughtyList.push(students[0]);

// var index = naughtyList.indexOf("Timmy");
// console.log(naughtyList);
// if(index !== -1) {
//     naughtyList.splice(index, 1);
// }


// var random = [1, "Chelsea", true];

// var index1 = random.indexOf("Chelsea");
//  if (index1 == 1){
//      random.splice(index1, 2);
//  }


// console.log(naughtyList);
// console.log(random);

// var x = null;
// var y = null;
// var someVal = 10;
// for (x = 0; x < someVal; x++) {
//     //Iterate until told not to
//     for (y = 0; y < someVal; y++){
//         console.log(x);
//     }  
// }

// var students = ["John", "Jacob", "Jingle", "Joker", "Joshua"];
// for (var x = 0; x<students.length; x++){
//     console.log("Hello " + students[x]);
// }

// var tree = students.push("Kartik");
// console.log(students);
// console.log(tree);

// function area(length, width) {
//     return length * width;
// }

// var rectanglesAreas = [];
// rectanglesAreas.push(area(10, 12));
// rectanglesAreas.push(area(14, 3));
// rectanglesAreas.push(area(15, 11));
// var area1 = area(10, 15);

// console.log(area1);
// console.log(rectanglesAreas);

// var bankBalance = 500;

// function makeTransaction(priceOfSale) {
//     if (priceOfSale<=bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Purchase Successful");
//     }
//     else {
//         console.log("Insufficient Funds");
//     }
// }

// makeTransaction(79.00);
// console.log(bankBalance);
// makeTransaction(2.32);
// console.log(bankBalance);
// makeTransaction(10.45);
// console.log(bankBalance);

// makeTransaction(450);
// console.log(bankBalance);


// var transaction = function(priceOfSale) {
//     if (priceOfSale<=bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Purchase Successful");
//     }
//     else {
//         console.log("Insufficient Funds");
//     }
// };

// transaction(10);

// var printCustomerName = function(first, last) {
//     console.log("First Name: " + first + " Last Name: " + last);
// }

// var applyForCreditCard = function(creditScore, soul) {
//     //call some functions to process application
// }

// var bankOperations = [];
// bankOperations.push(transaction);
// bankOperations.push(printCustomerName);
// bankOperations.push(applyForCreditCard);

// bankOperations[1]("Sam", "Well");
// bankOperations[0](2000);

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + " and I'm " +this.age + " years old.";
    };
}

// var s1 = new Student("Jenny", "Laga", 5);
// console.log(s1);
// console.log(s1.greeting());
// console.log(s1.firstName);

// var studant0 = {
//     firstName: "John",
//     lastName: "Parker",
//     age: 7,
// };

// console.log(studant0.greeting());


//Creates a new empty Object
// var student1 = new Object();
// student1.firstName = "Bohn";
// student1.lastName = "Larker";
// student1.age = 8;

// var student2 = {};
// student2.firstName = "Zack";
// student2.lastName = "Bobo";
// student2.age = 9;

var students = [];
// students.push(studant0);
// students.push(student1);
// students.push(student2);
students.push(new Student("Jenny", "Lagaa", 7));
students.push(new Student("Jondaz", "Gonso", 9));
students.push(new Student("Ram", "Manas", 10));
console.log(students);


for (var index = 0; index<students.length; index++) {
    var student = students[index];
    console.log(student.greeting());
}

var rondo = students[1];

for (var key in rondo) {
    console.log(rondo[key]);
}
// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student["firstName"]);
// console.log(student["lastName"]);


var gotiya = function reviser(a, b){
    var x = 0;
    for(x = 1; x<6; x++){
        a = a * x;
        console.log(a);
        b+= a;
        console.log(b);
    }
    return (a+b);
}

var lotiya = function deviser(a, b){
    var x = 0;
    for(x = 1; x<6; x++){
        a = a * x;
        console.log(a);
        b+= a;
        console.log(b);
    }
    return (a+b);
}

var motiya = function leviser(a, b){
    var x = 0;
    for(x = 1; x<6; x++){
        a = a * x;
        console.log(a);
        b+= a;
        console.log(b);
    }
    return (a+b);
}

var a1 = 2;
var b1 = 4;

var collection = [];
collection.push(gotiya);
collection.push(motiya);
collection.push(lotiya);

for(var x = 0; x<collection.length; x++){
    var y = collection[x](a1, b1);
    console.log("I am number " + x + " HERE: " + y);
}

/* Testing and playing with objects in JS */
// var name1 = "Gopi";
var hush = {
    name1 : "Jose",
    team1 : "Tottenham",
    ghetto : function(){
        console.log("Hi, my name  is " + this.name1 + " and I manage " + this.team1);
    }

};

console.log(hush.name1);
hush.team1 = "Chelsea FC";
console.log(hush.team1);
hush.ghetto();

var manager = new Object();
manager.naam = "Ole Gunner";
manager.team = "Manchester City";
manager.age = 56;
manager.greet = function(){
    console.log("Hi, my name  is " + this.naam + " and I manage " + this.team + " ,also I am " + this.age + " years old!");
}

console.log(manager.naam);
console.log(manager.team);
console.log(manager.age);
manager.greet();

// console.log(manager["naam"]);

for (x in manager){
    console.log(manager[x]);
}

/* Using an object constructor */

function Manager(fname, lname, team, duration){
    this.fname = fname;
    this.lname = lname;
    this.team = team;
    this.duration = duration;
    this.salary = 1500;
    this.greet = function(){
        console.log(this.fname+" "+this.lname+" of "+this.team+" for "+this.duration+
        " years at "+this.salary+" euros per week");
    };
    this.changeSalary = function(revision){
        this.salary = revision;
        console.log("Salary Revision: "+this.salary);
    };
}

var manU = new Manager("Ole", "Solksjaer", "Manchester United", 3);
manU.greet();
for(x in manU){
    console.log(manU[x]);
}
manU.changeSalary(2000);
manU.greet();

var PL = [];
PL.push(new Manager("Frank", "Lampard", "Chelsea FC", 3));
PL.push(new Manager("Pep", "Guardiaola", "Manchester City FC", 4));
PL.push(new Manager("Jurgenn", "Klopp", "Liverpool FC", 4));
PL.push(new Manager("Jose", "Mourinho", "Tottenham Spurs FC", 2));

console.log(PL);

for(var x=0; x<PL.length; x++){
    PL[x].greet();
}

PL[0].changeSalary(4000);
PL[1].changeSalary(3000);
PL[2].changeSalary(2000);
PL[3].changeSalary(1000);

var palooza = {
    m : 42,
    getM: function(){
        return this.m;
    }
};

var unboundM = palooza.getM;
var boundM = palooza.getM.bind(palooza);

console.log(boundM());
console.log(unboundM());