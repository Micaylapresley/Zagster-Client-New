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

//jQuery command. Wait until web page loads call function
//whose name is in parentheses
//function call means run the code
$(greeter)

//call function add (use it - make it run)
add(2,3);
//greeter is the function identifier. name is the functions
//argument (info it need to do its job)
function add(num1, num2){
    answer = num1+num2;
    console.log("The answer is: " + answer);
    return answer;
}
function greeter(name){
   alert("welcome to" + name + " data visualization")
}

greeter("Micayla Presley's")



var person = {name: "Micayla", age: 30, car: {model: "Pontiac", year: 2004} } 
console.log ("My name is " + person.name)
console.log ("My age " + person.age)
console.log ("My car model is " + person.car.model)

if (person.age > 30){
    alert("you're old!")
}