const express = require('express')
const app = express();

const path = require('path');
const port = 3030;

app.use(express.static('public'))

app.get('/', (req,res) => {
    return res.sendFile(path.resolve(__dirname,'views','index.html'))
});

app.get('/register', (req,res) => {
    return res.sendFile(path.resolve(__dirname,'views','register.html'))
});

app.get('/login', (req,res) => {
    return res.sendFile(path.resolve(__dirname,'views','login.html'))
});

app.listen(port, () => console.log("pagina corriendo en puerto http://localhost:3030"))
