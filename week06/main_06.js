import {qs, onTouch} from "./utilities_06";

import Todos from "./toDo_06";

const toDoList = new Todos(qs("#taskList")[0], "TaskListStorage");
toDoList.listTodos();

onTouch("#addButton", toDoList.addTodo.bind(toDoList));
onTouch(".filter input", toDoList.filterTodos.bind(toDoList));

function addListeners() {
	onTouch(
		`#taskList input[type=checkbox]`,
		toDoList.completeTodo.bind(toDoList)
	);
	onTouch(".remove", toDoList.removeTodo.bind(toDoList));
}

export {addListeners};
