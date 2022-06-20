// Write your solution in this file!
const employee = {
    name : "Eden",
    streetAddress : "King/'s Road"
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {...employee, ... {[key]: value }}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;

    return employee;
}
function deleteFromEmployeeByKey(employee,key,value){
    const newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee,key,value){
    delete employee[key];
    return employee;
}