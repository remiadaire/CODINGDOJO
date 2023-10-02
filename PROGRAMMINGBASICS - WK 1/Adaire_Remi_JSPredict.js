

// Prediction #1
function myBirthYearFunc(){
    console.log("I was born in" + 1980);
}
myBirthYearFunc();
// Console.log will state: "I was born in 1980"


//Prediction #2
function myBirthYearFunc(birthYearInput){
    console.log("I was born in" + birthYearInput);
}
myBirthYearFunc(1980);
//With the year input added in parenthasis, the console.log would still read "I was born in 1980"

//Prediction #3
var num1 =10
var num2 = 20

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
add(10, 20);

/*
 console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);

    Summing Numbers!
    num1 is: 10
    num2 is: 20
    30

    */

 

    function timesTwoAgain(num) {
        console.log('num is', num);
        var y = num*2; //3*2 = 6  --> 5*2 = 10
        return y; // 10
    }
    var result = timesTwoAgain(3) + timesTwoAgain(5);
    console.log('result is', result);
    

    num is 3
    num is 6
    num is 5
    num is 10
    result is 16



    