//Declare a global variable using Const 
const browserVersion = "Chrome";

/*
var - is function scoped
Ignores blocks and creates only memory for the variable so value is undefined
Original value is assigned later 
*/
function getBrowserVersionVar() {
    if (browserVersion == "Chrome") {
        var browserVersion = "Firefox";
        console.log("Inside if block -var :", browserVersion);
    }
    console.log("Outside if Block -var :", browserVersion);
}

/*
let - is block scoped
It only exists inside the blocks
*/

function getBrowserVersionLet() {
    if (browserVersion == "Chrome") {
        let browserVersion = "Safari";
        console.log("Inside if block -let :", browserVersion);
    }
    console.log("Outside if block -let :", browserVersion);
}
console.log("--------------*******---------------------------");
getBrowserVersionVar();
getBrowserVersionLet();
console.log("--------------*******---------------------------");
