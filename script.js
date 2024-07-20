/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  const developer = arr.map((employee) => {
    if (employee.profession === 'developer') {
      console.log(employee);  
      return employee;

    }
})  


}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

  arr.forEach(employee => {
    if (employee.profession === "developer") {
        console.log(employee);
    }
});

}

function addData() {
  //Write your code here, just console.log

const newEmp = { id: 4, name: "susan", age: "20", profession: "intern" };

arr.push(newEmp);

console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log

const remEmp = arr.filter((emp) => emp.profession !== "admin");

console.log(remEmp);

}

function concatenateArray() {
  //Write your code here, just console.log

  const additionalEmployees = [
    { id: 4, name: "emma", age: "22", profession: "designer" },
    { id: 5, name: "mike", age: "21", profession: "developer" },
    { id: 6, name: "lisa", age: "23", profession: "manager" }
];


const concatenatedArray = arr.concat(additionalEmployees);


console.log(concatenatedArray);

}
