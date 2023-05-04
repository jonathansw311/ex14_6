// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

//console.log(numPlanets); // ? 8 /correct
//console.log(yearNeptuneDiscovered); // ? 1846 /correct

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ? 1846, 1659 // it prints an object with yearMarsDiscoverd: 159 and yearneptuneDiscovered: 1846


  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?your name is alejandrw and you like purple // correct
  getUserData({firstName: "Melissa"}) // ? your name is melissa and you like green//correct
  getUserData({}) // ? your name is and you like green// your name is undefined and you like green

  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ? maya//corect for all three
console.log(second); // ?marisa
console.log(third); // ?chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // ?raindrops on roses//correct
  console.log(whiskers); // ?whiskers on kittens//correct
  console.log(aFewOfMyFavoriteThings); // ? "Bright copper kettles",//corect but they are in an array
  //"warm woolen mittens",
  //"Brown paper packages tied up with strings"


  let numbers = [10, 20, 30];
  [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
  
  console.log(numbers) // ?10,30,20//correct

  let obj = {
    numbers: {
        a: 1,
        b: 2
    }
  }

 const  {a, b} = obj.numbers;

 //array swap
 let arr = [1,2];

[arr[0],arr[1]]=[arr[1],arr[0]]


function raceResult([first, second, third, ...rest]){
 return{
first,
second,
third,
rest: [...rest]
 };
}

const  raceResults= ([first, second, third, ...rest]) => ({first, second, third, rest});