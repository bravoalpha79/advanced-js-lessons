let nums = [1, 2, 3, 4, 5];

let multipliedNums = nums.map(num => num * 2);

console.log(multipliedNums);


const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentswithIds = students.map(student => [student.name, student.id]);

console.log(studentswithIds);