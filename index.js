const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

// Endpoint POST para agrega_todo
app.post('/agrega_todo', (req, res) => {
    const nuevoTodo = req.body; // Obtener los datos del cuerpo de la solicitud

    // Aquí puedes agregar lógica para guardar el nuevo todo en una base de datos, etc.
    console.log('Nuevo todo recibido:', nuevoTodo);

    // Respuesta de éxito
    res.status(201).send({ message: 'Todo agregado', todo: nuevoTodo });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
