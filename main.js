const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist',
        isCompleted: false
    }
];

console.log(todos[1].text); //returns Meeting with boss

for(let i = 0; i<=10; i++) {
    console.log(`For Loop Number: ${i}`);
}

let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}
