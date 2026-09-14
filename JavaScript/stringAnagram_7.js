/**
 * Example 1 : Split and Return the length of the last word in the string
 */

function stringSplit() {
    let s = "Hello World"
    let sValue = s.split(" ")
    let sLength = sValue.length

    for (let index = 0; index < sValue.length; index++) {
        if (index === sLength - 1) {
            const sFinal = sValue[index];
            console.log(`The last word is ${sFinal} with lenght`, sFinal.length);
        }
    }
}

stringSplit();

/**
 * Example 2 : Trim , Split and Return the length of the last word in the string
 */

function stringTrim() {
    let s = " fly me  to  the moon "
    let sValue = s.trim()

    let sValueSplit = sValue.split(" ")
    let sLength = sValueSplit.length

    for (let index = 0; index < sValueSplit.length; index++) {
        if (index === sLength - 1) {
            const sFinal = sValueSplit[index];
            console.log(`The last word is ${sFinal} with lenght`, sFinal.length);
        }
    }

}
stringTrim()

/*
Example 3 : To check if strings are Anagram
*/
function isAnagram(input1, input2) {
    let sValue1 = input1.trim().toLowerCase().split("").sort().join("")
    let sValue2 = input2.trim().toLowerCase().split("").sort().join("")

    if (sValue1 === sValue2) {
        return true
    }
    else {
        return false
    }
}
let fvalue1 = isAnagram(' Listen ', ' Silent ')
let fvalue2 = isAnagram(' hello ', ' WorlD')

console.log(fvalue1);
console.log(fvalue2);
