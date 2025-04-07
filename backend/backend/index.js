console.log ("Api rest SENA ....")

import bodyParser from 'body-parser';

import {
    PORT,
} from "./config.js";

import cors from "cors";
import express from "express";

import fs from "fs";
import path from "path";




import productoRoutes from './routes/productos.route.js';

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(productoRoutes)
app.use('/images', express.static('public/images'));

app.get('/', (req, res) => {
    res.send('Servidor de imágenes');
});

app.get('/api/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'avatar', filename);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ message: 'Imagen no encontrada' });
        }

        res.sendFile(filePath);
    });
});




app.listen(PORT);
console.log(".... corriendo por puerto 3001");