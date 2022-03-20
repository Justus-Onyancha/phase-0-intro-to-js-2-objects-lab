// Write your solution in this file!
const employee = {
	name: "Justus",
	streetAddress: "Langata",
};

// Returns an object with the original key value pairs and the new key value pair without modifying the original employee object
let updateEmployeeWithKeyAndValue = (employeeObject, key, value) => Object.assign({}, employeeObject, { [key]: value })

// Updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
let destructivelyUpdateEmployeeWithKeyAndValue = (employeeObject, key, value) => {
	employeeObject[key] = value;
	return employeeObject;
}

// Deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
let deleteFromEmployeeByKey = (employeeObject, key) => {
	const newEmployeeObject = Object.assign({}, employeeObject);
	delete newEmployeeObject[key];
	return newEmployeeObject;
}

//  Returns employee without the deleted key/value pair and modifies the original employee
let destructivelyDeleteFromEmployeeByKey = (employeeObject, key) => {
	delete employeeObject[key];
	return employeeObject;
}

// rewritten below for deeper understanding

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return {
//         ...employee,
//         [key]: value,
//       };
    
//   }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee;
//   }
// function deleteFromEmployeeByKey(employee, key ){
//     let newEmployee = {...employee};
//     delete newEmployee[key]
//     return newEmployee
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     let newEmployee = employee
//     delete newEmployee[key]
//     return newEmployee
// }