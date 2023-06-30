var selectedrow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var form_data = readFormData();
  if (selectedrow == null) {
    insertNewRecord(form_data);
  } else {
    updateRecord(form_data);
  }
  resetForm();
}

function readFormData() {
  var form_data = {};
  form_data["name"] = document.getElementById("name").value;
  form_data["college"] = document.getElementById("college").value;
  form_data["email"] = document.getElementById("email").value;
  form_data["phone"] = document.getElementById("phone").value;
  form_data["qua"] = document.getElementById("qua").value;
  form_data["ski"] = document.getElementById("ski").value;
  return form_data;
}

function insertNewRecord(data) {
  var table = document.getElementById("Load").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell0 = newRow.insertCell(0);
  cell0.innerHTML = data.name;
  cell1 = newRow.insertCell(1);
  cell1.innerHTML = data.college;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = data.phone;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = data.qua;
  cell4 = newRow.insertCell(5);
  cell4.innerHTML = data.ski;
  cell6 = newRow.insertCell(6);
  cell6.innerHTML = `<button onClick="onEdit(this)" class="edt">Edit</button> 
                    <button onClick="onDelete(this)" class="delt">Delete</button>`;
}

function onEdit(td) {
  selectedrow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedrow.cells[0].innerHTML;
  document.getElementById("college").value = selectedrow.cells[1].innerHTML;
  document.getElementById("email").value = selectedrow.cells[2].innerHTML;
  document.getElementById("phone").value = selectedrow.cells[3].innerHTML;
  document.getElementById("qua").value = selectedrow.cells[4].innerHTML;
  document.getElementById("ski").value = selectedrow.cells[5].innerHTML;
}
function updateRecord(form_data) {
  selectedrow.cells[0].innerHTML = form_data.name;
  selectedrow.cells[1].innerHTML = form_data.college;
  selectedrow.cells[2].innerHTML = form_data.email;
  selectedrow.cells[3].innerHTML = form_data.phone;
  selectedrow.cells[4].innerHTML = form_data.qua;
  selectedrow.cells[5].innerHTML = form_data.ski;
}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("Load").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("college").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("qua").value = "";
  document.getElementById("ski").value = "";

  selectedrow = null;
}