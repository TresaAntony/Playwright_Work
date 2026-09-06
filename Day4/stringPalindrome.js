function palindromeFun(inputValue) {

    let reversedStr = "";
    let newinputValue = inputValue.toLowerCase()
    let splitInput = newinputValue.split("")
    //console.log(splitInput);

    let indexLength = splitInput.length

    /*
        Reverser a string
    */
    for (let index = indexLength - 1; index >= 0; index--) {
        const element = splitInput[index];
        //console.log(element);
        reversedStr = reversedStr + element
    }
    console.log("Reversed string :", reversedStr);

    /*
    Palindrome - If the input string and the reversed string are the same it is a Palindrome
    */
    if (newinputValue === reversedStr) {
        /*
        Backticks (\` \`): Allow embedded expressions and multi-line strings. 
        let greeting = `Hello, ${name}!`;
        */
        console.log(`The input string ${newinputValue} is a palindrome , True`);
    }
    else {
        console.log(`The input string ${newinputValue} is not a palindrome , False`);
    }

}
palindromeFun("Madam")
palindromeFun("Butterfly")