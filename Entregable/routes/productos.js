const express = require("express");

const arr = [
    {
        id: 1,
        price: 200.00,
        title: "Compás",
        thumbnail: "compás.jpg",
    },
    {
        id: 2,
        price: 500.56,
        title: "Calculadora",
        thumbnail: "calculadora.jpg",
    },
    {
        id: 3,
        price: 350.67,
        title: "Lapiceras",
        thumbnail: "lapiceras.jpg",
    },
];

const { Router } = express;
const router = new Router();
const Contenedor = require("../EntregableAnterior");

const cont = new Contenedor("products.txt");

router.get("/productos/:id", async (req, res) =>
{
    res.send(await cont.getById(req.params.id));
});

router.put("/productos/:id", async (req, res) =>
{
    res.send(await cont.updateById(req.params.id, req.body));
});

router.delete("/productos/:id", async (req, res) =>
{
    res.send(await cont.deleteById(req.params.id));
});

router.get("/productos", async (req, res) =>
{
    res.send(await cont.readAll());
});

router.post("/productos", async (req, res) =>
{
    res.send(await cont.save(req.body));
});

module.exports = router;