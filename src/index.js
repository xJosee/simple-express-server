const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: "Software Avanzado - Tarea Práctica 5 - 201807431 - José Luis Herrera" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
