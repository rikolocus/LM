const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']; 
const names = ['John', 'Mathias', 'Elias', 'Brook']; 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const products = [ 
    { name: 'banana', price: 3 }, 
    { name: 'mango', price: 6 }, 
    { name: 'potato', price: ' ' }, 
    { name: 'avocado', price: 8 }, 
    { name: 'coffee', price: 10 }, 
    { name: 'tea', price: '' }, 
];

//1. Use the forEach function to console.log each country in the countries array.
countries.forEach(country => console.log(country))
//2. Use map to create an array of countries lengths from the countries array.
const countryLength = countries.map((country) => country.length)
console.log(countryLength);
//3. Use map to change each name to uppercase in the names array.
const countryUpperCase = countries.map((country) => country.toUpperCase());
console.log(countryUpperCase);
//4. Filter out countries starting with 'D';
const countryD = countries.filter((country)=>country.startsWith('D'));
console.log(countryD);
//5. Filter out only prices with numeric values.
const productPrices = products.filter((p) => typeof p.price === 'number');
console.log(productPrices);
/*6. Declare a function called getStringLists which takes an array as a parameter and returns an 
array only with the items of type ‘string’. */
const getStringLists = list => {
    return list.filter((l) => typeof l === 'string');
}
console.log(getStringLists(countries));
//7. Use a HOF to sum all the numbers in the numbers array. 
const sumNumbers = arr => {
    let sum=0;
    const callback = element => {
        sum += element;
    }
    numbers.forEach(callback);
    return sum;
}
console.log(sumNumbers(numbers));
/*8. Use reduce to concatenate all the countries and produce this sentence:  Finland, Sweden, 
    Denmark, Norway, and Iceland are north European countries. */
const concatenateCountries = countries.reduce((acc, country, index, array) => {
    if (index === array.length-1) {
        return acc + 'and ' + country + ' are north European countries';
    } else {
        return acc + country + ', ';
    }
}, ' ');
console.log(concatenateCountries);
//9. Check whether some names' length is greater than 7 in the names array.
const checkNamesGSeven= names.some (name => name.length>7)
if (checkNamesGSeven) {
    console.log('The are names with length greather than 7');
} else {
    console.log('The are not any name greater than 7 length');
}

console.log(checkCountryLenght7(countries));
//10. Check if all the countries contain the word land.
const countryLand = countries.every (c => c.includes('land'));
console.log(countryLand);
//11. Find the first country containing only six letters in the countries array.
const firstCountrySix = countries.findIndex(c => c.length==6);
console.log(firstCountrySix);
//12. Find the position of ‘Norway’, if it doesn't exist in the array, you will get -1.
const norwayCountry = countries.findIndex(c => c === 'Norway');
console.log(norwayCountry);
//13. Find the position of ‘Russia, if it doesn't exist in the array, you will get -1.
const rusiaCountry = countries.findIndex(c => c === 'Rusia');
console.log(rusiaCountry);
/*14. Find the total price of products by joining several array iterators  
(e.g. arr.filter(callback).reduce(callback)). */
const totalPriceAmount = productPrices.reduce((acc, p) => acc + p.price, 0);
console.log(totalPriceAmount);
//15. Find the sum of price of products using only the method reduce(callback).
const productTotal = products.reduce((acc, p) => {
    if (typeof p.price === 'number') {
        return acc + p.price;
    } else {
        return acc;
    }
}, 0)

console.log(productTotal);
const euroCountries = [ 
    {name: 'Austria', language: 'German'}, 
    {name: 'Belgium', language: 'Dutch'}, 
    {name: 'Bulgaria', language: 'Bulgarian'}, 
    {name: 'Croatia', language: 'Croatian'}, 
    {name: 'Cyprus', language: 'Greek'}, 
    {name: 'Czech Republic', language: 'Czech'}, 
    {name: 'Denmark', language: 'Danish'}, 
    {name: 'Estonia', language: 'Estonian'}, 
    {name: 'Finland', language: 'Finnish'}, 
    {name: 'France', language: 'French'}, 
    {name: 'Germany', language: 'German'}, 
    {name: 'Greece', language: 'Greek'},
    {name: 'Hungary', language: 'Hungarian'}, 
    {name: 'Ireland', language: 'English'}, 
    {name: 'Italy', language: 'Italian'}, 
    {name: 'Latvia', language: 'Latvia'}, 
    {name: 'Lithuania', language: 'Lithuanian'}, 
    {name: 'Luxembourg', language: 'French'}, 
    {name: 'Malta', language: 'English'}, 
    {name: 'Netherlands', language: 'Dutch'}, 
    {name: 'Poland', language: 'Polish'}, 
    {name: 'Portugal', language: 'Portuguese'}, 
    {name: 'Romania', language: 'Romanian'}, 
    {name: 'Slovakia', language: 'Slovak'}, 
    {name: 'Slovenia', language: 'Slovenian'}, 
    {name: 'Spain', language: 'Spanish'}, 
    {name: 'Sweden', language: 'Swedish'} 
]; 
//16. Declare a function called getFirstTenEuroCountries and return an array of the first ten countries.
const getFirstTenEuroCountries = () => {
    const tenEuro = euroCountries.slice(0, 10);
    return tenEuro;
}
console.log(getFirstTenEuroCountries());
//17. Declare a function called getLastTenEuroCountries which returns the last ten countries.
const getLastTenEuroConuntries = () => {
    const lastTen = euroCountries.slice(euroCountries.length-10, euroCountries.length);
    return lastTen;
}
console.log(getLastTenEuroConuntries());
//18. Find out the most used letter as initial for an european country name from the array.
const initialLetterCount = {};
euroCountries.forEach(country => {
    const firstLetter = country.name[0];
    if (initialLetterCount[firstLetter]) {
        initialLetterCount[firstLetter]++;
    } else {
        initialLetterCount[firstLetter] = 1;
    }
});
let mostUsed = '';
let maxUsed = 0;
for (const letter in initialLetterCount) {
    if (initialLetterCount[letter] > maxUsed) {
        mostUsed = letter;
    }
}
console.log(mostUsed);
//19. Sort countries by language.
const sortedEuroCountries = euroCountries.sort((a, b) => a.language.localeCompare(b.language));
console.log(sortedEuroCountries);
//20. Create an array with the objects whose languages are spoken in more than one country. 
const languageCountry = {};
euroCountries.forEach(country => {
    const language = country.language;
    if (language) {
        languageCountry[language] = (languageCountry[language] || 0) + 1;
    }
});
console.log(languageCountry);
const languagesMoreOneCountry = Object.fromEntries(
    Object.entries(languageCountry).filter(([language, count]) => count > 1)
);
console.log(languagesMoreOneCountry);
//21. Create a function to create an array with the n most populated countries. 
const countriesWithPopulation = [ 
    {country: 'China', population: 1377422166}, 
    {country: 'India', population: 1295210000}, 
    {country: 'United States of America', population: 323947000}, 
    {country: 'Indonesia', population: 258705000}, 
    {country: 'Brazil', population: 206135893}, 
    {country: 'Pakistan', population: 194125062}, 
    {country: 'Nigeria', population: 186988000}, 
    {country: 'Bangladesh', population: 161006790}, 
    {country: 'Russian Federation', population: 146599183}, 
    {country: 'Japan', population: 126960000} 
];
const mostPopulated = (countries, n) => {
    const sortCountry = countries.slice().sort((a,b) => b.population-a.population);
    return sortCountry.slice(0, n);
}
console.log(mostPopulated(countriesWithPopulation, 3));
// console.log(mostPopulatedCountries(countriesWithPopulation, 3)); 
/* [ {country: 'China', population: 1377422166}, {country: 'India', population: 
1295210000}, {country: 'United States of America', population: 323947000} ] */ 