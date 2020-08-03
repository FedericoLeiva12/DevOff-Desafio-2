const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({}))

app.post('/', (req, res) => {

});

const listener = app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto: " + listener.address().port);
});