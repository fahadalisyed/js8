/*function power(a,b){
    if(b === 0){
        return 1;
    }
    let result = 1;
    for(let i = 0; i < Math.abs(b);i++){
        result*=a;

    }
    if( b < 0){
        return 1 / result;
    }
    return result;
}
const result=power(2,3);
console.log(result);*/

/*
function isleapyear(year){
    if((year % 4 === 0 && year % 100!==0)||year%400=== 0){
        return true;
    }else{
        return false;
    }

}
const year = parseInt(prompt("Enter a year:"));
if(isleapyear(year)){
     console.log(year + "is a leap year. ");
     
    }
    else{
       console.log(year + "is not a leap year.");
}*/

/*
function calculateSemiperimeter(a,b,c){
    return(a+b+c) / 2;
}

function calculateTriangleArea(a,b,c){
    const S =calculateSemiperimeter(a,b,c);
    const area = Math.sqrt(S*(S - a) * (S - b)* (S - c));
    return area;
}
 const sideA = 5;
 const sideB = 6;
 const sideC = 7;

 const area = calculateTriangleArea(sideA,sideB,sideC);
 console.log("The area of the triangle is:" + area);*/

/*
function calculateAverage(mark1, mark2, mark3){
    return(mark1 + mark2 + mark3) / 3;
}

function calculatePercentage(totalMarks,maxMarks){
    return(totalMarks / maxMarks) * 100;
}
function mainFunction(mark1, mark2, mark3){
    const average = calculateAverage(mark1, mark2, mark3);
    const totalMarks = mark1 + mark2 + mark3;
    const maxMarks = 300;

    const percentage = calculatePercentage(totalMarks,maxMarks);


    console.log("Marks in Subject 1:" + mark1);
    console.log("Marks in Subject 3:" + mark3);
    console.log("Marks in Subject 2:" + mark2);
    console.log("Average MArks:" + average);
    console.log("Percentage:" + percentage + "%");

}
mainFunction(85,90,78);*/

/*
function customIndexOf(str, charToFind) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === charToFind) {
            return i; 
        }
    }
    return -1; 
}


const text = "Hello, World!";
const charToSearch = "o";
const result = customIndexOf(text, charToSearch);
console.log("Index of '" + charToSearch + "' is: " + result);*/

/*

function removeVowels(sentence) {

    const vowelRegex = /[aeiouAEIOU]/g;

    
    const result = sentence.replace(vowelRegex, '');

    return result;
}


const inputSentence = "This is a sample sentence with vowels";
const sentenceWithoutVowels = removeVowels(inputSentence);
console.log(sentenceWithoutVowels);*/



/*
function countSuccessiveVowels(text) {
  const vowels = "aeiouAEIOU"; // List of vowels
  let count = 0; // Initialize the count to 0

  for (let i = 0; i < text.length - 1; i++) {
    const currentChar = text[i];
    const nextChar = text[i + 1];

    if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
      switch (currentChar + nextChar) {
        case "ai":
        case "ia":
        case "ei":
        case "ie":
        case "oi":
        case "io":
        case "ui":
        case "iu":
          count++;
          break;
        default:
          break;
      }
    }
  }

  return count;
}

// Example usage:
const sentence = "This is a sample sentence with various vowels in succession.";
const count = countSuccessiveVowels(sentence);
console.log("Number of successive vowel pairs: " + count);*/


/*

function convertToMeters(kilometers) {
    return kilometers * 1000;
}

function convertToFeet(kilometers) {
    return kilometers * 3280.84; 
}

function convertToInches(kilometers) {
    return kilometers * 39370.1; 
}

function convertToCentimeters(kilometers) {
    return kilometers * 100000; 
}

function convertAndPrintDistance(kilometers) {
    const meters = convertToMeters(kilometers);
    const feet = convertToFeet(kilometers);
    const inches = convertToInches(kilometers);
    const centimeters = convertToCentimeters(kilometers);

    console.log("Distance in Meters: " + meters + " meters");
    console.log("Distance in Feet: " + feet + " feet");
    console.log("Distance in Inches: " + inches + " inches");
    console.log("Distance in Centimeters: " + centimeters + " centimeters");
}

const distanceInKilometers = 50; 
convertAndPrintDistance(distanceInKilometers);
*/

/*
function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12.00;
    
    if (hoursWorked <= regularHours) {
        return 0; // No overtime pay if less than or equal to 40 hours
    } else {
        const overtimeHours = hoursWorked - regularHours;
        const overtimePay = overtimeHours * overtimeRate;
        return overtimePay;
    }
}

// Example usage:
const hoursWorked = 45; // Replace with the actual hours worked
const overtimePay = calculateOvertimePay(hoursWorked);

console.log("Hours Worked: " + hoursWorked + " hours");
console.log("Overtime Pay: Rs." + overtimePay); */


function calculateCurrencyNotes(amountInHundreds) {
    const amountInRupees = amountInHundreds * 100; // Convert to rupees
    let notes100 = 0;
    let notes50 = 0;
    let notes10 = 0;

    while (amountInRupees >= 100) {
        notes100++;
        amountInRupees -= 100;
    }

    while (amountInRupees >= 50) {
        notes50++;
        amountInRupees -= 50;
    }

    while (amountInRupees >= 10) {
        notes10++;
        amountInRupees -= 10;
    }

    return {
        notes100: notes100,
        notes50: notes50,
        notes10: notes10,
    };
}

// Example usage:
const amountInHundreds = prompt("Enter the amount to be withdrawn in hundreds:"); // Input from the user
const notes = calculateCurrencyNotes(parseInt(amountInHundreds));

console.log("Amount to be Withdrawn: Rs." + (amountInHundreds * 100));
console.log("Number of 100 Rupee Notes: " + notes.notes100);
console.log("Number of 50 Rupee Notes: " + notes.notes50);
console.log("Number of 10 Rupee Notes: " + notes.notes10);



