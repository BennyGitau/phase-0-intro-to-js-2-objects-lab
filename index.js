// Write your solution in this file!
const employee = {
    name: "Benny",
    address: "Nairobi"
};

//returns an employee with the original key value pairs and the new key value pair
//it does not modify the original employee, but rather returns a clone with the new data
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]:value,
    }
}

//updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

//deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
//does not modify the original employee (it is non-destructive)

function deleteFromEmployeeByKey(employee, key) {
        const newEmployee = { ...employee};
        delete newEmployee[key];
        return newEmployee;
}


//returns employee without the deleted key/value pair
//modifies the original employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}