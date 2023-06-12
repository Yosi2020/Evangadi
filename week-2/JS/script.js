//Question 1
function myFirst() {
    var a="Hello";  
    console.log(a);  
}

myFirst();

//Question 2

function mySecond(x) {
    console.log(x);
}

mySecond("red");

//Question 3

function myThird(y) {
    return mySecond(y);
}

myThird("blue");


//Question 4

function myFourth (colors= ["green", "blue"]) {
    console.log(colors[0])
}
myFourth (colors=["green", "blue"]);

//Question 5
function myFifth (age= [7,10]) {
    console.log ((age [0]) + (age [1]) )
}
myFifth (age=[7,10]);

// Question 6 Write a function that takes an integer minutes and converts it to seconds.

function minsToSecs(minutes) {
    return minutes * 60;
}

let minutes = 5;
let seconds = minsToSecs(minutes);

console.log(`${minutes} minutes is equal to ${seconds} seconds.`);
console.log(seconds)

// Question 7 Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function questionSeven(num) {
    return ++num
}

let num = 5

let result = questionSeven(num);

console.log(result);


// Question 8 Write a function that takes the base and height of a triangle and return its area.



function area(base, height) {
    area1 = (base * height) / 2;
    return area1
}

let base = 20
let height = 3

let answer = area(base , height)
console.log(answer)


function area (base, height) {
    if ( typeof base != "number" || typeof height != "number"){
        return "please input number values only";
    }
    else{
         let a1 = base * height 
    let a2 = a1 / 2
    return a2
    }
}

let triArea = area (10 , 10)
console.log (triArea)


// function area3(base, height) {
//     try {
//         let a1= (base * height) /2 ;
//         return a1;
//     }
//     catch{
//         return "please input number values only";
//     }
// }
// area4= area3 ("two", "three")
// console.log(area4)

//--------------------------------------

// Question 9  Create a function that returns the total number of legs of all the animals. In this challenge, a
// farmer is asking you to tell him how many legs can be counted among all his animals. The
// farmer breeds three species (chickens = 2 legs, cows = 4 legs, pigs = 4 legs). Remember:
// the farmer wants to know the total number of legs and not the total number of animals.

function legs (chickens,cows,pigs)  {
    return( (chickens*2) + (cows*4) + (pigs*4))
}

let totalLegs = legs(5,2,8)

console.log(totalLegs)

//Question 10 Create a function that takes an array containing only TWO numbers as a parameter and
// returns a value that is 3 times the first element of the array.

function questionTen(numeros){
    return (numeros[0]* 3)
}

console.log(questionTen([2,7]))

// Question 11 Create a function that returns true when num1 is equal to num2; otherwise return false.

let num1 = 7
let num2 = 5

if (num1===num2) {
    console.log(true)
} else {
    console.log(false)
}

//Question 12 Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false.


function divisible(b) {
    if ((b%100)===0) {
    return true;
} else {
    return false;
}
}
console.log(divisible(1)) 
console.log(divisible(1000)) 
console.log(divisible(100)) 



//Question 13 Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.

let num5 = 22

function isEvenOrOdd(num5) {
    if (num5 % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(isEvenOrOdd(num5))

// Question 14
// Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79

function grade(score) {  
    switch (true) {

        case (score <=100 && score >=90) :
            console.log("Grade A")
            break; 

        case (score<=89 && score >=80):
            console.log("Grade B")
            break;

        case (score <= 79 && score >= 0) :
            console.log("Grade C")

        default: 
        console.log("invalid score")
            break;
    }
}

grade(100)




function questionFourteen(score) {
    if (score<=100 && score>=90) {
    return "Grade A";
    } else if (score <= 89 && score >= 80) {
    return "Grade B";
    } else if (score <= 79 && score >= 0) {
    return "Grade C";
    } else {
    return "Invaild score";
    }
}

console.log(questionFourteen(100)) 






