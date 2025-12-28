// let promiseOne = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello world");
//         res();
//     },1000)
// })
// promiseOne.then(()=>{
//     console.log("hello world from function itself");
    
// })
// console.log("outer one 1");

// new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello 2");
//         res()
        
//     },1010);
// })
// .then(()=>{
//     console.log("hello form res 2");
    
// })

// console.log("outer one 2");

// let promiseThree = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res({username:"mamoonkhan",age : 20})
//     }, 2000);
// })

// promiseThree.then(({username:u,age:a})=>{
//     console.log(u,a);
    
// })

let promiseFour = new Promise((res,rej)=>{

    setTimeout(() => {
        let error = false
        if(!error){
            res({username:"mamoonkhan",age : 20})
        }else{
            rej("you got an error")
        }
    }, 1000);
})
// chaining in chaing we will the value to the other nighbour and he will acces it through argumants
// {username:u,age:a}
promiseFour
.then((res) => {
    return res;
})
.then((username)=>{
    console.log(username.username,username.age);
})
.catch( error => console.log(error) )
