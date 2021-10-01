const express = require("express");

const app = express();

// middlewares a nivel de aplicacion
app.use(function (req, res, next) {
    console.log("Se Ejecutó Alguna Ruta");
    next();
})

app.get("/", (req, res) => {
    res.json({ message: "ok", data: "Hola!" });
});

app.get("/home", (req, res) => {
    res.json({ message: "ok", data: "Bienvenido a Sección Home" });
});


app.listen(8080, () => {
    console.log("App running on port 8080");
})