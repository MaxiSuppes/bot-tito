import express from 'express';
import bodyParser from 'body-parser';
import {MessageController} from "./controllers/MessageController";

// Set up the express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Define endpoints
app.post('/api/v1/todos', (request, response) => {
    new MessageController(request, response).handleRequest()
});


// Run app
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
