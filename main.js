const list_ul = document.getElementById("list_ul");

document.getElementById("to_do_button").addEventListener("click", () => {
  let input_data = get_input_data("to_do_input");
  set_local_data(input_data, "key1");
  let my_list = get_local_data("key1");
  list_ul.innerHTML = create_list1(my_list);
  remove_item();
});
document.getElementById("clear_all").addEventListener("click", () => {
  clear_all("key1");
  location.reload();
});

function create_list1(my_arr) {
  let list = "";
  my_arr.forEach((element, index) => {
    let id = `delete_${index}`;
    list += `<li class="list_li hide_icon"><div>${element}<img src="icon.svg"/></div><button class="delete" id=${id}><img src="delete.svg" alt="delete" /></button></li>`;
  });
  return list;
}

function get_input_data(id) {
  return document.getElementById(id).value;
}

function set_local_data(data, data_key) {
  if (localStorage.getItem(data_key) !== null) {
    let local_data = JSON.parse(localStorage.getItem(data_key));
    local_data.push(data);
    localStorage.setItem(data_key, JSON.stringify(local_data));
  } else {
    localStorage.setItem(data_key, JSON.stringify([data]));
  }
}
function get_local_data(data_key) {
  return JSON.parse(localStorage.getItem(data_key));
}

function clear_all(data_key) {
  localStorage.removeItem(data_key);
}

function remove_item() {
  let removed_item = document.getElementsByClassName("delete");

  for (let i = 0; i < removed_item.length; i++) {
    removed_item[i].addEventListener("click", function (event) {
      console.log(event.target); // Only log if the clicked element is the parent itself
      event.stopPropagation();
      console.log(event.target);
    });
  }
}

// function enter() {
//   let to_do_input = document.getElementById("to_do_input");
//   to_do_input.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       document.getElementsByClassName("to_do_button")[0].click();
//     }
//   });
// }
// enter();
