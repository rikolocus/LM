const constants = [2.72, 3.14, 9.81, 37, 100]; 
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']; 
const rectangle = { width: 20,  height: 10,  area: 200,  perimeter: 60 }; 
const users = [ 
    { 
    name: 'Brook', 
    scores: 75, 
    skills: ['HTML', 'CSS', 'JS'], 
    age: 16 
    }, 
    { 
    name: 'Alex', 
    scores: 80, 
    skills: ['HTML', 'CSS', 'JS'], 
    age: 18 
    }, 
    { 
    name: 'David', 
    scores: 75, 
    skills: ['HTML', 'CSS'], 
    age: 22 
    }, 
    { 
    name: 'John', 
    scores: 85, 
    skills: ['HTML'], 
    age: 25 
    }, 
    { 
    name: 'Sara', 
    scores: 95, 
    skills: ['HTML', 'CSS', 'JS'], 
    age: 26 
    }, 
    { 
    name: 'Martha', 
    scores: 80, 
    skills: ['HTML', 'CSS', 'JS'], 
    age: 18 
    }, 
    { 
    name: 'Thomas', 
    scores: 90, 
    skills: ['HTML', 'CSS', 'JS'], 
    age: 20 
    } 
];
/*1.Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, 
    waterBoilingTemp. 
2. Destructure and assign the elements of countries array to fin, est, swe, den, nor 
3. Destructure the rectangle object by its properties. 
4. Iterate through the users array and get all the properties of the object using destructuring 
5. Find the users who have less than two skills 
6. Write a function called convertArrayToObject which can convert the array to a structure object. 
See the following example to help you understand. 

const pupils = [ 
    ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]], 
    ['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]] 
]; 
console.log(convertArrayToObject(pupils)); 

[
    { 
    name: 'David', 
    skills: ['HTML', 'CSS', 'JS', 'React'], 
    scores: [98, 85 ,90, 95] 
    }, 
    { 
    name: 'John', 
    skills: ['HTML', 'CSS', 'JS', 'React'], 
    scores: [85, 80, 85, 80] 
    }
];
7. Copy the students object to newStudents without copying the original object. In the new object, 
    perform the following actions: 
    • Add Bootstrap with level 8 to the frontEnd  
    • Add Express with level 9 to the backEnd  
    • Add SQL without level to the dataScience  */
const students = { 
    name: 'David', 
    age: 25, 
    skills: { 
        frontEnd: [ 
        { skill: 'HTML', level: 10 }, 
        { skill: 'CSS', level: 8 }, 
        { skill: 'JS', level: 8 } 
    ], 
    backEnd: [ 
        { skill: 'Node', level: 7 } 
    ],
    dataScience: ['Python', 'R', 'D3.js'] 
    } 
};
//1.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
//2.
let [fin, est, swe, den, nor] = countries;
console.log(fin, est, swe, den, nor);
//3.
let {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);
//4.
for (let {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age);
}
//5.
for (let {skills} of users) {
    let countSkills = 0;
    for (let s of skills){
        if (s != null) {
            countSkills++;
        }
    }
    if (countSkills<2) {
        console.log(skills);
    }
}
//6.
const convertArrayToObject = (pupils) => {
    return pupils.map (([name, skills, scores]) => ({
        name,
        skills,
        scores
    }));
}
console.log(convertArrayToObject(pupils));
//7.
const newStudents = {...students,
    skills: {
        ...students.skills,
        frontEnd: [
            ...students.skills.frontEnd,
            {skill: 'Bootstrap', level: 8}
        ],
        backEnd: [
            ...students.skills.backEnd,
            {skill: 'Express', level: 9}
        ],
        dataScience: [
            ...students.skills.dataScience,
            'SQL'
        ]
    }
};
