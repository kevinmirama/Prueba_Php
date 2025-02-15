document.addEventListener('DOMContentLoaded', function () {
    cargarTareas();

    // Manejar el envío del formulario para agregar tareas
    document.getElementById('formTarea').addEventListener('submit', function (e) {
        e.preventDefault();
        const descripcion = document.getElementById('descripcion').value;
        crearTarea(descripcion);
    });

    // Manejar el envío del formulario para editar tareas
    document.getElementById('formEditarTarea').addEventListener('submit', function (e) {
        e.preventDefault();
        const id = document.getElementById('editarId').value;
        const descripcion = document.getElementById('editarDescripcion').value;
        modificarTarea(id, descripcion);
    });
});

function cargarTareas() {
    fetch('php/obtener_tareas.php')
        .then(response => response.json())
        .then(data => {
            const listaTareas = document.getElementById('listaTareas');
            listaTareas.innerHTML = '';
            data.forEach(tarea => {
                const li = document.createElement('li');
                li.className = `list-group-item ${tarea.completada ? 'completada' : ''}`;
                li.innerHTML = `
                    <span>${tarea.descripcion}</span>
                    <div>
                        <input type="checkbox" ${tarea.completada ? 'checked' : ''} onchange="completarTarea(${tarea.id}, this.checked)">
                        <button class="btn btn-warning btn-sm" onclick="editarTarea(${tarea.id}, '${tarea.descripcion}')">Modificar</button>
                        <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${tarea.id})">Eliminar</button>
                    </div>
                `;
                listaTareas.appendChild(li);
            });
        });
}

function crearTarea(descripcion) {
    fetch('php/crear_tarea.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ descripcion })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('descripcion').value = '';
            cargarTareas();
        } else {
            alert('Error al crear la tarea');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function editarTarea(id, descripcion) {
    // Muestra el formulario de edición
    document.getElementById('formEditar').style.display = 'block';

    // Llena los campos del formulario con los datos de la tarea
    document.getElementById('editarId').value = id;
    document.getElementById('editarDescripcion').value = descripcion;
}

function cancelarEdicion() {
    // Oculta el formulario de edición
    document.getElementById('formEditar').style.display = 'none';
}

function modificarTarea(id, descripcion) {
    fetch('php/modificar_tarea.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, descripcion })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Oculta el formulario de edición
            document.getElementById('formEditar').style.display = 'none';

            // Recarga la lista de tareas
            cargarTareas();
        } else {
            alert('Error al modificar la tarea');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function eliminarTarea(id) {
    fetch('php/eliminar_tarea.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            cargarTareas();
        } else {
            alert('Error al eliminar la tarea');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function completarTarea(id, completada) {
    fetch('php/completar_tarea.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, completada })
    })
    .then(response => response.json())
    .then(data => {
        if (!data.success) {
            alert('Error al actualizar la tarea');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}