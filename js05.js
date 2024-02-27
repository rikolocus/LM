/*1. Write a loop that makes the following pattern using console.log(): 
# 
## 
### 
#### 
##### 
######
*/ 
let arr = ["#", "##", "###", "####", "#####", "######"];
for (const counter of arr) {
    console.log(counter);
}

/*2. Use a loop to print the following pattern: 
1 x 1 = 1 
3 x 3 = 9 
5 x 5 = 25 
7 x 7 = 49 
9 x 9 = 81
*/ 
let numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(`${num} x ${num} = ${(num*num)}`);
}

/*3. Use a loop to iterate from 0 to 100 and print only odd numbers separated by coma*/ 
const oddNumbers = [];
for (let i = 0; i <= 100; i++) {
    if (i%2!=0) {
        oddNumbers.push(i);
    }
}
const result = oddNumbers.join(', ');
console.log(result);

/*4. Iterate from 0 to 100 and print the sum of all numbers. 
The sum of all numbers from 0 to 100 is … */
let sum = 0;
for (let i=0; i<=100; i++) {
     sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

/*5. Generate an array of 5 random numbers.*/ 
let arra = Array();
for (let i=0; i<5; i++) {
    arra[i] = Math.round(Math.random()*100);
}
console.log(arra);


/*6. Using the following countries array…  
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']; 
…create the following array of arrays (country name, prefix in uppercase, and length): 
[ 
  ['Albania', 'ALB', 7], 
  ['Bolivia', 'BOL', 7], 
  ['Canada', 'CAN', 6], 
  ['Denmark', 'DEN', 7], 
  ['Ethiopia', 'ETH', 8], 
  ['Finland', 'FIN', 7], 
  ['Germany', 'GER', 7], 
  ['Hungary', 'HUN', 7], 
  ['Ireland', 'IRE', 7], 
  ['Japan', 'JAP', 5], 
  ['Kenya', 'KEN', 5] 
]*/
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
const newCountries = Array();
for (let country of countries) {
    newCountries.push(`[${country},  ${country.slice(0,3).toUpperCase()},  ${country.length}]`);
}
console.log(newCountries.join("\n"));

/*1. Declare a function fullName that takes name, surname1 and surname2 as 
parameters, and returns your full name. */
function fullName(name ='Alberto', surname1 ='Solera', surname2 = 'Gómez') {
    return `${name} ${surname1} ${surname2}`;
}
console.log(fullName());

/*2. Declare a function addNumbers that takes three parameters and returns the sum.*/
function addNumbers(num1 = Math.round(Math.random()*11), num2 = Math.round(Math.random()*11), num3 = Math.round(Math.random()*11)) {
    let sum = num1+num2+num3;
    return sum;
}
console.log(addNumbers());

/*3. Circumference of a circle is calculated as follows: circumference = 2 * π * r. Write a 
function which calculates circumOfCircle */
function circumOfCircle(radio = Math.round(Math.random()*11)) {
    return (radio*Math.PI*2);
}
console.log(circumOfCircle());

/*4. Temperature in ºC can be converted to ºF using this formula: ºF = (ºC * 9 / 5) + 32. 
Write a function which convert ºC to ºF. */
function convertCtoF(grade = Math.round(Math.random()*11)) {
    return ((grade*9/5)+32);
}
console.log(convertCtoF());

/*5. Speed is calculated by dividing the total distance covered by a moving object 
divided by the total amount of time taken. Write a function which calculates a speed 
of a moving object. */
function speed (time = Math.round(Math.random()*11), distance = Math.round(Math.random()*100)) {
    return (`${Math.round(distance/time)} km/h`);
}
console.log(speed());

/*6. Write a function called findMax2 that takes two numbers and returns the maximum 
without using the Math.max method. Then, create a function called findMax3 that 
takes three numbers and, using your function findMax2, returns the maximum. */
function findMax2(num1 = Math.round(Math.random()*11), num2 = Math.round(Math.random()*11)) {
    if (num1>=num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(findMax2());

function findMax3(num1 = Math.round(Math.random()*11), num2 = Math.round(Math.random()*11), num3 = Math.round(Math.random()*11)) {
    const maxNum1Num2 = findMax2(num1, num2);
    return (maxNum1Num2 >= num3? maxNum1Num2:num3);
}
console.log(findMax3());

/*7. Write a function which shows time in this format: 08/01/2021 04:08 using the Date 
object. */
function todayTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return (`${date}/${month}/${year} ${hours}:${minutes}`);
}
console.log(todayTime());

/*8. Declare a function which takes a number as a parameter and it adds all the numbers 
in that range. For example, if it receives a 5, it returns 15 (it is 0+1+2+3+4+5). */
function addAllNumbers(num = Math.round(Math.random()*10)+1) {
    let sum = 0;
    for (let i=1; i<=num; i++) {
        sum += i;
    }
    return sum;
}
console.log(addAllNumbers());

/*9. Declare a function which takes a positive integer as a parameter, and it counts 
number of evens and odds in the number. 
evensAndOdds(100); 
The number of odds is 50. 
The number of evens is 51. */
function countOddsEvens(num = Math.round(Math.random()*100)+1) {
    let odds = 0;
    let even = 0;
    for (let n=0; n<=num;n++) {
        n%2!=0? odds++:even++;
    }
    return (`The number of odds is ${odds}.\nThe number of evens is ${even}`);
}
console.log(countOddsEvens());

/*10. Write a function which takes any number of arguments and returns the sum of the 
arguments 
sum(1, 2, 3);    
// -> 6 
sum(1, 2, 3, 4); // -> 10 */
function sumAllNums() { 
    let sum = 0; 
    for (const element of arguments) { 
    sum += element; 
    } 
    return sum; 
} 
console.log(sumAllNums(1, 2, 3, 4));

/*11. Write a function called average, it takes an array parameter and returns the average 
of the items. Check if all the array items are number types. If not, return a 
reasonable feedback message. */
function average(...numbers7) {
    let msg = 'A parameter is not a number type';
    let numberType = false;
    let sum=0;
    for (let num of numbers7) {
        if (typeof nun === 'number' && !isNaN(num)) {
            sum+=num;
        } else {
            numberType = true;
            break;
        }
    }
    return numberType? msg:(sum/numbers7.length);
}
console.log(average());

/*12. Write a function to check if all items are unique in the array passed as a parameter.*/
    function allUnique(...items) {
        for (let i=0; i<=items.length; i++) {
            for (let j= i+1; j<=items.length; j++) {
                if (items[i]==items[j]) {
                    return false;
                }
            }
        }
        return true;
    }
    console.log(`Are all parameters uniques? ${allUnique()}`);

/*13. Declare a function named userIdGeneratedByUser. It doesn’t take any parameter but 
it takes two inputs using prompt(). The first input is the number of characters, and 
the second input is the number of ids which are supposed to be generated. You 
must declare and use the following function called randomChar(). 
function randomChar() { 
const chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
return chars.charAt(Math.floor(Math.random() * chars.length)); 
} 
// see these examples 
userIdGeneratedByUser(); // the user writes 5, and then 4. 
kcsy2 
SMFYb 
bWmeq 
2Rgxf 
userIdGeneratedByUser(); // the user writes 16, and then 5. 
1GCSgPLMaBAVQZ26 
YD7eFwNQKNs7qXaT 
ycArC5yrRupyG00S 
UbGxOFI7UXSWAyKN 
dIV0SSUTgAdKwStr */
function randomChar() { 
    const chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
    return chars.charAt(Math.floor(Math.random() * chars.length)); 
    } 
function userIdGeneratedByUser(numChar=16, numID=5) {
    let userID = [];
    for (let i=1; i<=numID; i++) {
        let charct = [];
        for (let j=1; j<=numChar; j++) {
            charct.push(randomChar());
        }
        userID.push(charct.join(''));
    }
    return userID;
}
console.log(userIdGeneratedByUser());

/*14. Now, write a function generateColors to generate random hexadecimal colors. 
console.log(generateColors()); // #b334ef*/
function generateColors() {
    const characters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++) {  
        color += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return color;
}
console.log(generateColors());
