// 1. Declare an array with more than 4 elements
let arr = ['Hola', 1, 2, 'Como estás'];

// 2. Find the length of your previous array
console.log(arr.length);

// 3. Get the first item, and the last item from your array
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// 4. Declare an array called mixedDataTypes
let mixedDataTypes = ['Enough', 1, 2, {Person: 'Pablo', Height: 175}, {Language: ['Valenciano', 'Spanish', 'English']}];
console.log(mixedDataTypes.length);

// 5. Declare an array variable named companies
let companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'Oracle', 'Amazon'];
console.log(companies);

// 6. Print the first company, and last company
console.log(companies[0]);
console.log(companies[companies.length - 1]);

// 7. Find out the middleIndex
let middleIndex = Math.floor((companies.length / 2)-1);
console.log(companies[middleIndex]);

// 8. Change in the previous array the first item to uppercase
companies[0] = 'FACEBOOK';

// 9. Use the previous array to print the sentence
companies[5] = ' and Amazon are big IT companies';
console.log(companies);

// 10. Check if a certain company exists in the companies array. Print true or false
console.log(companies.includes('Google'));
console.log(companies.includes('HBO'));

// 11. Print a copy of the previous array in alphabetical order
companies.sort();
console.log(companies);

//12. Reverse the previously sorted array 
companies.reverse();
console.log(companies);

//13. Slice out the first 3 companies from the array
companies.slice(0,3);
console.log(companies);

//14. Remove the first IT company from the array
companies.shift();
console.log(companies);

//15. Remove the last IT company from the array
companies.pop();
console.log(companies);

//16. Remove all the punctuations and change the string to array. Then, count the number of words.
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, and PHP.';
let text2 = text.replace(/\./g, '').split(' ').length;
console.log(text2);

//17. In the following shopping cart:
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
//Add 'Meat' in the beginning of your shopping cart. Add Sugar at the end of your cart. Then, remove 'Honey'. Finally, Modify ‘Tea’ to 'Green Tea'
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.slice(4,5);
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);
 	
//18. The following is an array of 10 students ages:
let ages = [19, 22, 19, 24, 20, 25, 23, 24];
//o Sort the array and find the min and max age
//o Find the average age (all items divided by number of items
ages.sort();
console.log(ages[0]);
console.log(ages[ages.length-1]);
let average = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7])/ages.length;
console.log(average);