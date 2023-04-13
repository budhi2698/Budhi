let employeeList = [];
let id = 1;

function addEmployee() {
  let name = prompt("Enter employee name:");
  let date = prompt("Enter date:");
  employeeList.push({id: id, name: name, date: date});
  id++;
  displayEmployeeList();
}

function deleteEmployee() {
  let idToDelete = prompt("Enter employee ID to delete:");
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].id == idToDelete) {
      employeeList.splice(i, 1);
      break;
    }
  }
  displayEmployeeList();
}

function updateEmployee() {
  let idToUpdate = prompt("Enter employee ID to update:");
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].id == idToUpdate) {
      let newName = prompt("Enter new name:");
      let newDate = prompt("Enter new date:");
      employeeList[i].name = newName;
      employeeList[i].date = newDate;
      break;
    }
  }
  displayEmployeeList();
}

function displayEmployeeList() {
  let employeeTable = document.getElementById("employee-list");
  employeeTable.innerHTML = "";
  for (let i = 0; i < employeeList.length; i++) {
    let row = employeeTable.insertRow();
    let nameCell = row.insertCell(0);
    let idCell = row.insertCell(1);
    let dateCell = row.insertCell(2);
    nameCell.innerHTML = employeeList[i].name;
    idCell.innerHTML = employeeList[i].id;
    dateCell.innerHTML = employeeList[i].date;
  }
}