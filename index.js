// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

// if (hourNow > 15) {
//     greeting = 'Good Evening';
// } else if(hourNow > 12)
// {
// greeting = 'Good afternoon';
// } else if (hourNow > 0) {
// } greeting = 'Good Morning';{
// }
// console.log(greeting);



// const x = document.getElementById("demo");

// function getLocation() {
//     if(navigator.geolocation){
// navigator.geolocation.getCurrentPosition(showPosition);
// }else{
//     x.innerHTML = "Geolocation is not supirsed by this browser";
// }
//  }

//  function showPosition(position){
//   x.innerHTML = "Lattitude: " + position.coords.latitude +
//   "<br> Longitude: " + position.coords.longitude;
//  }

//   ASYNC
// function myDisplayer(something) {
// document.getElementById("demo").innerHTML = something;
// }

// function myCalculator(num1,num2, myCallback){
// let sum = num1 + num2;
// myCallback(sum);
// }
// myCalculator(20,5, myDisplayer);

// function showTime(){

// var date = new Date();
// var h = date.getHours();
// var m = date.getMinutes();
// var s = date.getSeconds();
// var session = "AM";

// if(h == 0){
// h = 12;
// }
// if (h > 12){
// h = h - 12;
// session = "AM";



// }
// h = (h < 10) ? "0" + h : h;
// m = (m < 10) ? "0" + m : m;
// s = (s < 10) ? "0" + s : s;

// var time = h + ":" + m + ":" + s + " " + session;
// document.getElementById("myclock").innerText = time;
// document.getElementById("myclock").textContent = time;

// setTimeout(showTime,  1000);
// showTime();
// }


// Hoisting
// cowSays('moo');
// function cowSays(sound){

//     window.alert(`The Cow Says ${sound}`);
// }


// SCOPE
// function showName(){
//     var name = "Geeks for Geeks";
//     window.alert(name);
// }
// showName();

// IIFE
// let paintColor = 'red';

// const paint = (() => {
// return{
// changeColorToBlue: () => {
// paintColor: 'Blue';
// return paintColor;
// },
// changeColorToGreen: () => {
// paintColor: 'Green';
// return paintColor;
// }
// }
// })();

// Closures
// const first = () => {
// const greet = 'Hi';
// const second = () => {
// const name = 'john';

// console.log(greet);
// }
// return second;
// }
// const newFunc= first();

// CALLBACKS
// const greeting = (name) => {
// window.alert('Hello' + name)
// }

// const processUserName= (callback) => {
// name = 'GeeksforGeeks';
// callback(name);
// }

// processUserName(greeting);


// PROMISES
// const promise = new Promise ((resolve, reject) => {

// isNameExist = true;
// if(isNameExist) {
// resolve("Success - User Exist")
// } else {
// reject('error')
// }})

// promise.then (result => window.alert(result))
// .catch(() => {
//     console.log('error');
// })

// ASYNC AND AWAIT
// const showPosts = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await response.json();
//     console.log(posts);
//    }

//    showPosts();

// PROMISES
// setTimeout(() => {
// window.alert("Joel");
// setTimeout(() => {
//     window.alert("Johnny");
// setTimeout(() => {
//     window.alert("Johnny");
//     setTimeout(() => {
//         window.alert("Johnny");

// }, 2000);   
// }, 2000); 
// }, 2000);   
// }, 2000);


// FILTER//FIND
// let users = [

//     { firstName: "Bruno", age: 23 },
//     { firstName: "Jenny", age: 3 },
//     { firstName: "Angie", age: 13 },
//     { firstName: "Lionel", age: 43 },
//     { firstName: "Vlad", age: 28 },
//     { firstName: "Kevin", age: 56 }
// ];

// const youngPeople = users.filter((person) => {
//     return person.age <= 15;
// });

// const seniorPeople = users.filter((person) => person.age >= 40);

// const Bruno = users.find((person) => person.firstName === "Bruno");

// console.log(Bruno);


// DESTRUCTRUING ARRAYS AND OBJECTS
// let fruits = ["pineapple","apple","pears","lemon","strawberries"];

// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];

// let [fruit1, fruit2, fruit3] = fruits;
// console.log(fruit1,fruit2,fruit3);



// const Susan = {
// firstName: "Susan",
// lastName: "Bee",
// age: 14,

// hobbies: {
// hobby1: "dancing",
// hobby2: "jumping"
// }};

// const {firstName, age, hobbies:{hobby1}} = Susan;

// console.log(firstName, age, hobby1);

// function individualData({firstName, age, hobbies:{hobby1}}){
// console.log(firstName, age, hobby1);
// }
// individualData(Susan);

