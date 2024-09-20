// let firstPromise = new Promise((resolve , reject) =>{
//     console.log("Hello , i am md rijoan maruf")
//     resolve(1001)
//     // reject(new Error("Internal Server Error"));
// })


// function sayMyName(){
//     console.log("Hello , i am Md Rijoan Maruf")
// }

// console.log(firstPromise)

// setTimeout(sayMyName , 5000)

// let promise1 = new Promise((resolve , reject) => {
//     let success = 0;

//     if(success){
//         resolve("Promise Fulfilled")
//     }
//     else{
//         reject("Promise Rejected")
//     }
// })

// promise1.then((massage) =>{
//     console.log("Then massage is : " + massage);
// }).catch((error) => {
//     console.log("Error : " + error);
// })

// async function getData() {
//     setTimeout(function(){
//         console.log("I am inside set Timeout block")
//     } , 3000)
// }

// getData();


// async function getData(){
//     // get requst - async
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//     // Parse json - async
//     let data = await response.json();
//     console.log(data);

// }

// getData()