// const p=new Promise((res,rej)=>{
//     setTimeout(function(){
//         console.log("async task is compled")
//         res()
//     },1000)
// })
// p.then(function(){
//     console.log("promise consumed")
// })

// new Promise((res,rej)=>{
//     setTimeout(function(){
//         console.log("async task 2")
//         res()
//     })
// }).then(()=>{
//     console.log("async task resolved")
// })
// 
// const p=new Promise((res,rej)=>{
//     setTimeout(() => {
//         let error=false;
//         if(!error){
//             res({username:"sachi",password:"12345"})
//         }
//         else{
//             rej("Error:samething went wrong")
//         }
//     }, 1000);
// })
// p.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// })
// .catch((err)=>{
//     console.log(err)
// })


//use of async await;

// async function consumepromise(){
//     try{
//         const response=await p;
//         console.log(response)
//     }
//     catch(error){
//         console.log(error)

//     }
// }
// consumepromise()

// async function getAlluser(){
//     const response=await fetch("https://jsonplaceholder.typicode.com/users")
//     const data=await response.json()
//     console.log(data)
// }
// getAlluser()




// let str="sachchida"
// let strlen=str.length;
// let reverse=''
// for(let i=strlen-1;i>=0;i--){
//     reverse=reverse+str[i]

        
    
// }
// console.log(reverse)



// let str=["sachchida","sonu","sandeep",]
// let strlen=str.length;
// for(let i=0;i<strlen-1;i++){
//     console.log(str[0])
//    for(let j=0;j<str[i].length-1;j++){
//     console.log(str[i][j])
//     continue;
//    }
// break;
// }



//let str=["sonu","sachchida","love","sandeep"]
// let longestword=""
// for(let i=0;i<str.length;i++){
//     if(str[i].length>longestword.length){
//     longestword=str[i];
    
// }
// }
// console.log(longestword)

// let str="racecar"
// let reverse_str=""
// for(let i=str.length-1;i>=0;i--){
//     reverse_str+=str[i];
// }

// if(str===reverse_str){
//     console.log("pallindrme")
// }
// else{
//     console.log("not pallindrome")
// }




// function numberofvowels(word){
//     let vowels=["a","e","i","o","u"];
//     let lowewrstring=word.toLowerCase();
//     let count=0;
//     for(let i=0;i<=lowewrstring.length;i++){
//         if(vowels.includes(lowewrstring[i])){
//             count++;
//         }
        
//     }
//     console.log(count)
// }
// let str="sohan"
// numberofvowels(str)

// let str1="listen"
// let str2="silent"
// for(let i=0;i<str1.length;i++){
//     for(let j=0;j<str2.length;j++){
//         str1[i ]==str2[j]
//     }
// }


// function factorial(number){
//     if(number==0){
//         return 1;
//     }
//     return number*factorial(number-1)
// }
// let number=5;
// console.log(factorial(number))


function factorial(number){
    if(number==0){
        return 1;
    }
        let factorial=1;
        for(let i=1;i<=number;i++){
            factorial=i*factorial;
            return factorial;
        } 
    
    }
let number=5;
console.log(factorial(number))





































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































