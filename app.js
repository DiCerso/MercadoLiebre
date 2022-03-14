const express = require('express')
const app = express();

const path = require('path');
const port = 3030;

app.use(express.static('public'))

app.get('/', (req,res) => {
    return res.sendFile(path.resolve(__dirname,'views','home.html'))
});


app.listen(port, () => console.log("pagina corriendo en puerto http://localhost:3030"))
