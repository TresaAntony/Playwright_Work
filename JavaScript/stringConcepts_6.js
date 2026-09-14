function stringFunc() {

    // Creating Strings 

    /** ################################### */
    //Literal:
    let str1 = 'Hello, World!';

    /** ################################### */
    //Constructor:
    let str2 = new String('Hello, Testleaf!');

    /** ################################### */
    //Basic Properties 
    //length: Returns the length of the string. 
    let str3 = new String('Hello, class!');
    let len = str3.length
    console.log("Length of str3 :", len);

    /** ################################### */
    //Retrieving Parts of a String 
    //charAt(index): Returns the character at the specified index.
    let str4 = new String('Hello, preparation!');

    const cha1 = str4.charAt(0)
    console.log("Character at index postion str4 :", cha1);
    //H
    const cha2 = str4.charAt(13)
    console.log("Character at index postion str4 :", cha2);
    //a
    const cha3 = str4.charAt(-1)
    console.log("Character at index postion str4 :", cha3); //nothing is returned empty //

    /** ################################### */
    //SUBSTRING:
    /* NOTES : 
    *  endIndex is always EndIndex-1
    *  (7,4) - Swap done if endIndex is less
    *  Negative - not accepted - Return Empty
    * /
    
    /*substring(startIndex, [endIndex]): Returns a part of 
    the string between the start and end indexes. */

    let str5 = new String('Hello, learning!');

    let str5Print = str5.substring()
    console.log("Substring returns entire string if no position mentioned : ", str5Print)

    /**
     * will return the entire string exactly as it is, 
     * starting from the very first character (index 0) all the way to the end.
     */
    let str5Print1 = str5.substring(0)
    console.log("Substring from the index position : ", str5Print1)

    /*
    * 0 (Start Index): The position where extraction begins. The character at this index is included.
    * 5 (End Index): The position where extraction stops. The character at this index is excluded.
    * it takes from 0 position to 5-1 position
    */
    let str5Print2 = str5.substring(0, 5)
    console.log("Substring from the index position : ", str5Print2)
    //Hello //not Hello(chara at end index excluded

    /**
     * swaps the arguments if the start index is greater than the end index.
     */
    let str5Print3 = str5.substring(8, 3)
    console.log("Substring - swaps the arguments : ", str5Print3)// lo, l
    //chara at end index excluded

    /**
     * Negative numbers become 0: 
     * becomes str5.substring(3, 0).
     * and then swapped
     */
    let str5Print4 = str5.substring(3, -1)
    console.log("Substring - negative : ", str5Print4) // Hel

    /*
    Negative numbers become 0:
    */
    let str5Print5 = str5.substring(-4)
    console.log("Substring index Negative vale : ", str5Print5) // Hello, learning!

    //SLICE:

    /* NOTES : 
    *  endIndex is always EndIndex-1
    *  Swap Not done if endIndex is less - Its output is Empty //
    *  Negative - accepted - takes from last -1,-2,etc
    * /
    
    /*
    * slice(startIndex, [endIndex]): Similar to `substring` 
    but can accept negative indexes. 
    */

    let strSlice6 = "Hello, slice jobpreparation!"

    let strValue = strSlice6.slice()
    console.log("Slice no index : ", strValue) //Hello, slice jobpreparation!

    let strValue1 = strSlice6.slice(0)
    console.log("Slice index 0 : ", strValue1) //Hello, slice jobpreparation!

    let strValue2 = strSlice6.slice(5, 9)
    console.log("Slice index from start to End-1 value : ", strValue2) //, sl


    // If start index is greater than end index it cannot swap as in substring 
    // It return empty
    let strValue5 = strSlice6.slice(8, 2)
    console.log("Slice index Negative vale : ", strValue5) //

    //Return value from back for 4 position -1,-2,-3,-4,-5,-6,-7
    let strValue3 = strSlice6.slice(-4)
    console.log("Slice index Negative vale : ", strValue3) //, ion!

    let strValue4 = strSlice6.slice(1, -3)
    console.log("Slice index Negative vale : ", strValue4) //,  ello, slice jobpreparati

    /**
     * SUBSTR
     * Returns a part of the string starting from the index for a given number of characters. 
     */


    let strSubStr1 = "Hello, sub got it!"

    let strSubStrValue1 = strSubStr1.substr(3, 5)
    console.log("SubStr start index and length : ", strSubStrValue1) //lo, s

}
stringFunc()

modifyingStrings()

function modifyingStrings() {

    /**
     * CONCATINATION
     * concat(string2, string3, ..., stringN): Combines the text of several strings and returns a new string. 
     */
    let strConcat = "Hello"
    let strConcat1 = strConcat.concat(" My ", "World")
    console.log("Concatenated String ", strConcat1);

    /**
     * TRIM:
     * trim(): Removes whitespace from both ends of a string. 
     */

    let strTrin = "Hello I am Tresa "
    let strTrim1 = strTrin.trim()
    console.log("String after Trim :", strTrim1);

    //  strTrin.trimEnd()
    //  strTrin.trimStart()

    /**
     * CASE CONVERSION:
     * toUpperCase(), toLowerCase(): Returns the string in upper or lower case. 
        str.toUpperCase()
        str.toLowerCase()
     */

    /**
    * REPLACE:
    * replace(searchFor, replaceWith): Replaces the specified segment of the string. 
      str.replace('World', 'Mars') 
    */

    let strRepla = strTrin.replace('Hello', 'Olla')
    console.log("Replace : ", strRepla);

}

stringSpliting()

function stringSpliting() {
    let strVal = "I am learning"
    let strSplit = strVal.split("")

    console.log(("SPLIT string : ", strSplit));
    //['I', ' ', 'a', 'm',' ', 'l', 'e', 'a','r', 'n', 'i', 'n','g']

    let strValue2 = "I am learning"
    let strSplit2 = strValue2.split(',')

    console.log(("SPLIT string 2: ", strSplit2));
    //[ 'I am learning' ]
}

stringSearching()
function stringSearching() {
    /**
     * SEARCH STRING: Returns the position where the string is found
     * Returns -1 if not found
     */
    let strSearch = "I am going to fly high"
    let strSearchVal = strSearch.indexOf('to', 0)
    console.log("SEARCH string found :", strSearchVal); //SEARCH string found : 11

    /**
     * INCLUDES - True / False
     */
    let strInclude = strSearch.includes("go")
    console.log(strInclude); //true

    /**
     * Template Literals 
    Backticks (\` \`): Allow embedded expressions and 
    multi-line strings. */
    let name = 'World';
    let greeting = `Hello, ${name}!`;
    console.log(greeting); //Hello, World!
    
}
