let firstPromise = new Promise((resolve , reject) =>{
    console.log("Hello , i am md rijoan maruf")
    resolve(1001)
    // reject(new Error("Internal Server Error"));
})


function sayMyName(){
    console.log("Hello , i am Md Rijoan Maruf")
}

console.log(firstPromise)

setTimeout(sayMyName , 5000)