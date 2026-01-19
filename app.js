let data = [];
let editId = null;

function readAll() {
  let tableData = document.querySelector(".table_data");
  var e = "";

  data.map(
    (obj) =>
      (e += `<tr>
            <td>${obj.name}</td>
            <td>
                <button onclick=edit(${obj.id})>Edit</button>
                <button onclick=remove(${obj.id})>Delete</button>
            </td>
        </tr>`),
  );
  tableData.innerHTML = e;
}

function edit(id) {
  editId = id;

  document.querySelector(".create_form").style.display = "none";
  document.querySelector(".update_form").style.display = "block";

  let object = data.find((obj) => obj.id === id);
  document.querySelector(".update_form .name").value = object.name;
}

function update() {
  let updatedName = document.querySelector(".update_form .name").value;

  if (updatedName.trim() === "") {
    alert("Please enter a value to update!");
    return;
  }

  let obj = data.find((item) => item.id === editId);
  obj.name = updatedName;

  readAll();

  document.querySelector(".update_form").style.display = "none";
  document.querySelector(".create_form").style.display = "block";
  document.querySelector(".update_form .name").value = "";
}

function create() {
  let name = document.querySelector(".create_form .name").value;

  if (name.trim() === "") {
    alert("Please enter a value before submitting!");
    return;
  }

  let obj = {
    id: Date.now(), 
    name: name,
  };

  data.push(obj);
  readAll();

  document.querySelector(".create_form .name").value = "";
}

function remove(id) {
  data = data.filter((obj) => obj.id !== id);
  

  if (editId === id) {
    editId = null;
    document.querySelector(".update_form").style.display = "none";
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".update_form .name").value = "";
  }
  
  readAll();
}
