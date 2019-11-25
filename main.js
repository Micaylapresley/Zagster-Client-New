//  const BASE_URL = "https://zagster-service.herokuapp.com"

//  $(updateView)

//  function updateView() {
//    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
//  }

// function updateRideCount(data) {
//   numberOfRides = data.count
//   $("h2#rideCount").html(numberOfRides)
// }
// // a memory location thatnever changes
// const BASE_URL = "https://zagster-service.herokuapp.com"
// const PI = 3.14159

// //jQuery command. Wait until web page loads call function
// //whose name is in parentheses
// //function call means run the code
// $(greeter)

// //call function add (use it - make it run)
// add(2,3);
// //greeter is the function identifier. name is the functions
// //argument (info it need to do its job)
// function add(num1, num2){
//     answer = num1+num2;
//     console.log("The answer is: " + answer);
//     return answer;
// }
// function greeter(name){
//    alert("welcome to" + name + " data visualization")
// }

// greeter("Micayla Presley's")



// var person = {name: "Micayla", age: 30, car: {model: "Pontiac", year: 2004} } 
// console.log ("My name is " + person.name)
// console.log ("My age " + person.age)
// console.log ("My car model is " + person.car.model)

// if (person.age > 29){
//     alert("you're old!")
// }

// //var year_list =[]
// //year_list.push(data[2016])

var data = {"2016":[{"9":220},{"10":141},{"11":89},:{"12":16}]}
var year_list = data[2016]
console.log("year list is " + year_list)

console.log(year_list[0][9])
console.log(year_list[1][10])
console.log(year_list[2][11])
console.log(year_list[3][12])


$(updateView)

// Arrays to hold data points pulled from JQUERY
let years = []
let months2016 = []
let months2017 = []
let months2018 = []

// define or implement a function
function updateView() {
    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)

    $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear),
    ).then(updateChart);
}

function perYear(data) {

    // [{"9":220},{"10:141"},{"11":89},{"12":16}]
    for (var index = 0, month=9; index <= 3, month<=12; ++index, ++month){
        months2016.push(data[2016] [index] [month]);
    }

    console.log("2016 data by months is easy" + months2016)


    for (var index = 0, month = 1; index <=11, month <=12, ++index, ++month) {
        months2017.push(data[2017][index][month]);
    }

    console.log("2017 data by months is easy" + months2017)

    for (var index = 0, month = 1; index <=11, month <=12, ++index, ++month) {
        months2018.push(data[2018][index][month]);
    }

    console.log("2018 data by months is easy" + months2018)