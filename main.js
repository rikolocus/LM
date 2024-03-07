//Check Animal
const rat = new Animal ('Charlie', 2, 'black', 4);
console.log(rat.Name);
const dog1 = new Dog ('Brownie', 4, 'brown', 4, true);
console.log(dog1.Sound);
console.log(dog1.DogInfo);
const cat1 = new Cat ('Kia', 5, 'black and white', 4, 'mixed');
console.log(cat1.Sound);

//Check PesonalAccount
const account1 = new PersonalAccount('Alberto', 'Solera');
account1.addIncome('Bizum', 500);
account1.addIncome('Transfer', 600);
account1.addExpense('Iphone', 200);
account1.addExpense('TV', 100);
console.log(account1.totalIncome);
console.log(account1.totalExpense);
console.log(account1.accountBalance);

//Check Statistics
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

console.log('Count:', Statistics.count(ages));
console.log('Sum: ', Statistics.sum(ages));
console.log('Min: ', Statistics.min(ages));
console.log('Max: ', Statistics.max(ages));
console.log('Range: ', Statistics.range(ages));
console.log('Mean: ', Statistics.mean(ages));
console.log('Median: ', Statistics.median(ages));
console.log('Mode: ', Statistics.mode(ages));
console.log(Statistics.describe(ages));