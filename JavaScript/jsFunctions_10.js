
/**
 * 
 * Function Declaration
 */
function userProfile(name){
    console.log(`Hello, ${name}`);
}

userProfile("Tresa")

/**
 * Arrow Function
 * functionName =(parameters)=>logic
 */

doubleFun = (numb)=> numb*2
let  returnVal= doubleFun(4)
console.log(returnVal);

/**
 * Anonymous Function or Function Expression
 * Function with no name and stored in Variable
 */

let funVar = function (){
    //SetTimeout is a inbuilt function
    setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
}, 2000);
}
funVar()


/**
 * CallBack Function
 */
function getUserData(callBackFun){
setTimeout(() => {
    callBackFun();
}, 3000);
}
getUserData(()=>{
    console.log("Call back function printed after 3sec");
    
})