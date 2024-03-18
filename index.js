// Write your solution in this file!
const employee = {
    name: "Benny",
    address: "Nairobi"
};
console.log(employee);

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
    
}
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
console.log(employee);

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

    
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key];
    
    return employee;
}
