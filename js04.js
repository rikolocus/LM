/ 
  JS04 Exercises 
Copy and comment all the following statements. Answer the exercises after every statement. 

1. First, think of the result of the following expressions. After you decide the result, confirm it 
using console.log() but do not copy the console.log(…) confirmation in your exercises. 
a) 4 == 4 true
b) 4 === 4 true
c) 4 != 4 false
d) 4 !== 4 false
e) 4 != '4' false
f) 4 == '4' true
g) 4 === '4' false

2. Figure out the result of the following expressions without using console.log(). After you 
decide the result, confirm it by using console.log(). Do not copy the console.log() 
confirmation in your exercises. 
a) 4 > 3 && 10 < 12 true
b) 4 > 3 && 10 > 12 false
c) 4 > 3 || 10 < 12 true
d) 4 > 3 || 10 > 12 true
e) !(4 > 3) false
f) !(4 < 3) true
g) !(false) true
h) !(4 > 3 && 10 < 12) false
i) !(4 > 3 && 10 > 12) true
j) !(4 === '4') true

3. Use the Date object to do the following activities 
a) What is the year today? const NOW = new Date(); console.log(NOW.getFullYear());
b) What is the month today as a number? console.log(NOW.getMonth());
c) What is the date today? console.log(NOW.getDate());
d) What is the day today as a number? console.log(NOW.getDay()); // Warning, start in 0 and Sunday
e) What is the hours now? console.log(NOW.getHours());
f) What is the minutes now? console.log(NOW.getMinutes());

4. Write a script (piece of code) that prompts the user to enter base and height of a triangle 
and calculates the area of the triangle (area = 0.5 x b x h). 
Example: Enter base: 20 
Enter height: 10 
The area of the triangle is 100

let base = prompt("Enter base");
alert(base);
let height = prompt("Enter height");
alert(height);
let area = 0.5*base*height;
console.log(area);
**alert are not necessary, they just return a warning with the element disposed.

5. Get the radius, using the prompt, and calculate the area of a circle (area = PI x r2), where PI 
is a constant equal to 3.1416. 
const PI = 3.1416;
let r2 = prompt("Enter radius");
let area = PI*r2;
console.log(area);

6. Prompt the user’s name. If the length of the name is greater than 7, say ‘{your name} is 
long’, else say ‘{your name} is short’. 

let name = prompt("Enter your name");
if (name.length>7) {
	console.log(`${name} is long`);
} else {
	console.log(`${name} is short`);
}

7. Compare the lengths of your name and your family name, then print which one is longer. 
Example: let firstName = 'John' 
  let lastName = 'Doe' 
  // Your first name, John, is longer than your family name, Doe.

let firstName = Alberto;
let lastName = Solera;
if (firstName.length>lastName.length); {
	console.log(`${firstName}, is longer than your family name, ${lastName}`);
} else {
	console.log(`${lastName}, is longer than your given name, ${firstName}`);
}


8. Declare two variables myAge and anotherAge and assign them initial values. Then, compare 
both ages. Print the difference in a sesntence. 
Example: let myAge = 35 
  let anotherAge = 25 
  // I am 10 years older than you.

let myAge = 37;
let anotherAge = 15;

if (myAge>anotherAge) {
	let difference = myAge-anotherAge;
	console.log(`I am ${difference} years older than you.`);
} else if (anotherAge>myAge) {
	let difference1 = anotherAge-myAge;
	console.log(`I am ${difference1} years younger than you.`);
} else {
	console.log("We are the same age.");
}

9. Using the prompt get the year the user was born and if the user is 18 or more, allow the 
user to drive, if not, tell the user to wait a certain number of years. 
Example: Enter year of birth: 2000 
  You are 23. Congratulations, you are old enough to drive! 
 
  Enter year of birth: 2007 
  You are 16. Sorry, you will be allowed to drive in 2 years.

const NOW = new Date();
let a = prompt('Enter year of birth:');
let year = NOW.getFullYear();
let age = year-a;
let license = 18;

if (age>=license) {
	let difference = age-license;
	console.log(`For ${difference} years, you are allowed to get the license.`);
} else {
	let difference1 = license-age;
	console.log(`Your are ${age}. Sorry, you will be allowed to get the driving license in ${difference1} years.`);
}

10. Apply the two following datetime formats using the Date time object. The hour and the 
minute should be all the time two digits (7 hours should be 07 and 5 minutes should be 05) 
a. YYYY-MM-DD HH:mm 
b. DD/MM/YYYY HH:mm 
Example:   2023-01-31 07:05 
   31/01/2023 07:05

const NOW = new Date();
console.log(`${NOW.getFullYear()}-${(NOW.getMonth()+1).toString().padStart(2,'0')}-${NOW.getDate().toString().padStart(2,'0')} ${NOW.getHours().toString().padStart(2,'0')}:${NOW.getMinutes().toString().padStart(2,'0')}`);
console.log(`${NOW.getDate().toString().padStart(2,'0')}/${(NOW.getMonth()+1).toString().padStart(2,'0')}/${NOW.getFullYear()} ${NOW.getHours().toString().padStart(2,'0')}:${NOW.getMinutes().toString().padStart(2,'0')}`);

11. Implement a ternary operator to print if ‘numA is greater than numB’ or 'numA is less than 
numB'. Otherwise, print that the numbers are equal. 
 Example:  let a = 4 
    let b = 3 
    4 is greater than 3

let numA = 10;
let numB = 20;
numA>numB? console.log(`${numA} is greater than ${numB}`) : numB>numA? console.log(`${numB} is greater than ${numA}.`) : console.log(`numA y numB are equals: ${numA}`);

12. Integer numbers can be odd or even. Even numbers are divisible by 2 and the remainder is 
zero. Prompt the user for a number and say if it is even or odd. 
Example:  Enter a number: 2 
  2 is an even number 
Enter a number: 9 
9 is an odd number. 

let a = prompt('Enter a number:');
a%2==0? console.log(`${a} is an even number.`) : console.log(`${a} is and odd number.`);
                                                                             
13. Write a switch which can give grades to students according to the following scores.  
o 89-100  → A 
o 70-89  → B 
o 60-69  → C 
o 50-59  → D 
o 0-49  → F 

let a;

while (true){
	a = prompt('Enter your grade:');
	switch (true) {
		case (a>89&&a<=100):
			console.log('Grade: A');
			break;
		case (a>69&&a<=89):
			console.log('Grade: B');
			break;
		case (a>59&&a<=69):
			console.log('Grade: C');
			break;
		case (a>49&&a<=59):
			console.log('Grade: D');
			break;
		case (a>-1&&a<=49):
			console.log('Grade: F');
			break;
		default:
			console.log('Enter a grade between 0 and 100');
			continue;
	}
	break;
}

14. Check if the season is Autumn, Winter, Spring or Summer, according to a month prompted 
to the user. Permit the user to write with upper o lower case, as he/she pleases. 
o September, October or November, the season is Autumn. 
o December, January or February, the season is Winter. 
o March, April or May, the season is Spring. 
o June, July or August, the season is Summer. 
Example:  
Enter a month: JaNuaRY 
The season is Winter.

let month;

while(true) {
 
	month = prompt('Enter the month:', 'January, February, March, April, May, June, July, August, September, October, November or December');
	switch (month.toLowerCase()) {
		case 'september':
		case 'october':
		case 'november':
			console.log('The season is Autumn');
			break;
		case 'december':
		case 'january':
		case 'february':
			console.log('The season is Winter');
			break;
		case 'march':
		case 'april':
		case 'may':
			console.log('The season is Spring');
			break;
		case 'june':
		case 'july':
		case 'august':
			console.log('The season is Summer');
			break;
		default:
			console.log('Introduce the month correctly');
			continue;
	}
	break;
}