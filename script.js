/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  const ans = arr.map((e) => {
    if(e.marks > 50)console.log(e);
  });

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  for(let student in arr){
    if(arr[student].marks > 50){
      console.log(arr[student]);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  let students = {id:4,name:"susan",age:"20",marks:45}
  arr.push(students)
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  // let students = [];
  // for(let i in arr){
  //   if(arr[i].marks > 50) {
  //      students.push(arr[i]);
  //   }
  
  // }
  // // arr = students;
  arr = arr.filter(e => (e.marks > 50));
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let students = [
    {id: 5, name: "Mon", age: "15", marks: 50 },
    {id: 6, name: "Ton", age: "22", marks: 43 },
    {id: 7, name: "Lon", age: "24", marks: 100 }
  ]
  arr=arr.concat(students)
  console.log(arr);
}
