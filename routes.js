const express = require ("express");
const multer = require ("multer");
const multerConfig = require("./config/multer");

const routes = express.Router();

const boxcontroller = require ("./controllers/boxcontroller");
const filecontroller = require ("./controllers/filecontroller");
// todas as info estao dentro do req; res eh a resposta para o cliente


routes.post("/boxes", boxcontroller.store); //GET, POST, PUT, DELETE
routes.post("/boxes/:id", boxcontroller.show);
routes.post("/boxes/:id/files", multer(multerConfig).single("file"), filecontroller.store);


module.exports = routes;



