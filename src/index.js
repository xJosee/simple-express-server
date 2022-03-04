const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Software Avanzado - Tarea Práctica 5 - 201807431 - José Luis Herrera</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});