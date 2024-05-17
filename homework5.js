// Zadanie 1

function doubledNumbers(numbers) {
    return numbers.map(number => number * 2);
}

const basicArray = [1, 10, 15, 20, 25];
const doubledArray = doubledNumbers(basicArray);

console.log("Tablica bazowa:", basicArray);
console.log("Tablica podwojona:", doubledArray);


// Zadanie 2

function studentsNames(students) {
    return students.map(student => student.name);
}

const students = [
    { name: "Jarosław", surname: "Kaczyński" },
    { name: "Przemysław", surname: "Czarnek" },
    { name: "Janusz", surname: "Kowalski" },
];

const names = studentsNames(students)

console.log("Studenci:", students);
console.log("Imiona studentów:", names);