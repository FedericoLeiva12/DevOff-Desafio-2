const express = require('express');
const app = express();

const algoritmos = require('./algoritmo');

app.use(express.json());
app.use(express.urlencoded({}));

app.post('/encode', (req, res) => {
    res.send({mensaje: algoritmos.matrixToStr(
        algoritmos.rotateMatrix(
            algoritmos.genMatrix(req.body.mensaje, req.body.vueltas)
        )
    ) });
});

app.post('/decode', (req, res) => {
    res.send({ mensaje: algoritmos.matrixToStr(
        algoritmos.rotateMatrix(
            algoritmos.genMatrix(req.body.mensaje, req.body.vueltas)
        )
    ) });
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor iniciado en el puerto: ", listener.address().port);
})