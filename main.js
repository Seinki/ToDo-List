const todo = document.getElementById('todo')
// fitur TODO
// 1. menambahkan
// 2. mencoret
// 3. menghapus

function add() {
    // ambil nilai dari textnya
    let newText = document.getElementById('new_text')
    console.log(newText.value)
    // tambahkan list baru ke dalam ul
    let newTodo = "<li> <span class='new-todo-text' onclick='toggle(this)'>" + newText.value + "</span>" +
                    "<span class='new-todo-x' onclick='removeItem(this)'> [X] </span>" +
                    "</li>"
    todo.insertAdjacentHTML('afterbegin', newTodo)
    // kosongkan fieldnya
    newText.value = ""
}

// mencoret
function toggle(el) {
    el.classList.toggle('done')
}

// menghapus
function removeItem(el) {
    el.parentElement.remove()
}