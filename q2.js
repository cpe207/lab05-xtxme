// นางสาวธนพร ตั้งผดุงสุข 660610762
// define interface for Student object
/* Your code here */
// assign interface/type to the function definition properly
function findTopNames(students){
    students=students.filter((x) => x.score > 8);
    let Topnames = students.map((x) => x.name);
    return Topnames;
  }
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
