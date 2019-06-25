import express from 'express';
import bodyParser from 'body-parser';
import {MessageController} from "./controllers/MessageController";
import {Tito} from "./models/Tito";

// Set up the express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const tito = new Tito();

// Define endpoints
app.post('/messages', (request, response) => {
    new MessageController(request, response, tito).handleRequest();
});


// Run app
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
