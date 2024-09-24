// Obtener los elementos del DOM
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Función para añadir una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, escribe una tarea.');
        return;
    }

    // Crear un nuevo elemento <li>
    const li = document.createElement('li');
    li.textContent = taskText;

    // Crear el botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li); // Eliminar el <li> del DOM
    });

    // Añadir el botón al <li>
    li.appendChild(deleteButton);

    // Añadir el <li> a la lista de tareas
    taskList.appendChild(li);

    // Limpiar el input después de añadir la tarea
    taskInput.value = '';
}

// Evento para añadir tarea al hacer clic en el botón
addTaskButton.addEventListener('click', addTask);

// Evento para añadir tarea al presionar "Enter"
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
