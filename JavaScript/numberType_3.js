function numberType(parNum) {
    var num = parNum;
    if (num > 0) {
        console.log("Number is positive ")
    } else if (num < 0) {
        console.log("Number is negative")
    } else if (num === 0) {
        console.log("Number is neutral")
    }
    else {
        console.log("Number is undefined")
    }
}
numberType(-50)