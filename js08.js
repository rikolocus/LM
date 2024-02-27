/*
1. Create an empty set. 
2. Create a set containing from 0 to 10 using a loop. 
3. Remove an element from a set. 
4. Clear a set. 
5. Create a set of string elements from the countries array. 
const countries = ['Spain', 'Portugal', 'Andorra']; 
6. Create a map from countries and the number of characters of the country. 
const a = {4, 5, 8, 9}; 
const b = {3, 4, 5, 7}; 
7. Find a union b 
8. Find a intersection b 
9. Find a without b 
Use the attached countries_data.js file to answer the following exercise in the console: 
10. How many different languages are there in the countries array? 
11. Create a function to find the n most spoken languages: 
// Your output should look like this 
console.log(mostSpokenLanguages(countries, 8)); 
[  
] 
{ English: 91 }, 
{ French: 45 }, 
{ Arabic: 25 }, 
{ Spanish: 24 }, 
{ Russian: 9 }, 
{ Portuguese: 9 }, 
{ Dutch: 8 }, 
{ German: 7 }
]*/
//1.
const emptySet = new Set();
//2.
const zeroToTen = [];
for (let i=0; i<=10; i++) {
        zeroToTen.push(i)
}
const zeroToTenSet = new Set(zeroToTen);
//3.
zeroToTenSet.delete(5);
//4.
zeroToTenSet.clear();
//5.
const countries = ['Spain', 'Portugal', 'Andorra']; 
const countriesSet = new Set(countries);
//6.
const countriesMap = new Map();
for (const c of countries) {
    countriesMap.set(c, c.length);
}
//7.
const a = [4, 5, 8, 9]; 
const b = [3, 4, 5, 7];
let c = [...a,...b];
const abSet = new Set(c);
console.log(abSet);
//8.
let aSet = new Set(a);
let bSet = new Set(b);
let c2 = a.filter((num)=>bSet.has(num));
let cSet = new Set(c2);
console.log(cSet);
//9.
let c3 = a.filter((num)=>!bSet.has(num));
let cSetDifference = new Set(c3);
console.log(cSetDifference);
//10.
import { countries } from "./countries_data";
function countingLanguages(countries) {
    const allLanguages = countries.flatMap(country => country.languages);
    const languagesSet = new Set(allLanguages);
    return languagesSet.size;
}
console.log(countingLanguages(countries));
//11.
const mostSpokenLanguages = (countries, n) => {
    const countLanguage = new Map();
    for (const c of countries) {
        for (const l of c.languages) {
            if (countLanguage.has(l)) {
                countLanguage.set(l, countLanguage.get(l)+1);
            } else {
                countLanguage.set(l,1);
            }
        }
    }
    const sortLanguages = [...countLanguage.entries()]
    .sort ((a, b)=>b[1]-a[1])
    .slice (0, n);
    return sortLanguages;
}
console.log(mostSpokenLanguages(countries, 8));
