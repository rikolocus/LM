1. Declare a variable and assign it a string sentence.
let hello = “Hello, how are you?” 
2. Print the previous string value in the browser console.
console.log(hello)
3. Print the length of the string on the browser console.
console.log(hello.length)
4. Change all the string characters to capital letters.
console.log(hello.toUpperCase())
5. Change all the string characters to lowercase letters.
console.log(hello.toLowerCase())
6. Remove any trailing whitespace at the beginning and the end of ` Hello world! `.
console.log(hello.trim(‘ ‘))
7. Cut out the first word of the previous string using two different methods.
console.log(hello.substr(7,12))
console.log(hello.substring(7))
8. Obtain the phrase Days Of JavaScript from I Love Days Of JavaScript.
let phrase = “I Love Days Of JavaScript”
let subphrase = phrase.substring(7)
console.log(subphrase)
9. Check if the string contains the word Days.
console.log(subphrase.includes(‘Days’))
10. Split the string into an array.
console.log(subphrase.split(‘ ‘))
11. Split the string I Love Days Of JavaScript at the space.
console.log(phrase.split(‘ ‘))
12. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma plus a space `, ` into an array.
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(‘, ))
13. Change I Love Days Of JavaScript to I Love Weeks Of JavaScript.
console.log(phrase.replace(‘Days’, ‘Weeks’))
14. Find the character at index 15 in 'I Love Days Of JavaScript'.
console.log(phrase.charAt(15))
15. Determine the position of the first occurrence of `a` in I Love Days Of JavaScript.
console.log(phrase.indexOf(‘a’))
16. Determine the position of the last occurrence of a in I Love Days Of JavaScript.
console.log(phrase.lastIndexOf(‘a’))
17. Find the position of the first occurrence of the word because in the following sentence: 'You cannot end a sentence with because, because it is a conjunction’.
let phraseBecause = 'You cannot end a sentence with because, because it is a conjunction’
console.log(phraseBecause.indexOf(‘because’))
18. Find the position of the last occurrence of the word because in the previous sentence.
console.log(phraseBecause.lastIndexOf(‘because’))
19. Merge the strings 'I love' and 'sunny days' to a single string, 'I love sunny days'.
let love = ‘I love’
let sunny  = ‘sunny days’
console.log(love.concat(sunny))
20. Use startsWith() with the string These Are Days Of JavaScript to make the result true.
let days = ‘These Are Days Of JavaScript’
console.log(days.startsWith(‘These’))
21. Use endsWith() with the string These Are Days Of JavaScript to make the result true.
console.log(days.endsWith(‘JavaScript’))
22. Use repeat() method to print 'I love sunny days' 10 times.
let phraseTwo = love.concat(sunny)
console.log(phraseTwo.repeat(10))
23. Use console.log() to print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(‘The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another’)
24. Using console.log() to print out the following quote by Mother Teresa: "Love is not patronizing, and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(‘Mother Teresa: \"Love is not patronizing, and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"’
25. Make typeof '10' exactly equal to typeof 10.
let num = '10'
let numIntA = parseInt(num)
26. Make the string '9.8' exactly equal to the number 10.
let num = 9.8
let numInt = parseInt(num)
27. Generate a random number between 0 and 255 inclusively.
let randNum = Math.floor(Math.random()*256)
28. 'Work is a tough thing in this world. Some people like to work but many people still seek some strength to work every day.' Count the number of the word `work` in this sentence.
let sentence = 'Work is a tough thing in this world. Some people like to work but many people still seek some strength to work every day.'
let count = sentence.match(/\bwork\b/gi).length
console.log(count)
