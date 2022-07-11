const express = require('express');
const PORT = 3001;
const app = express();

app.get('/'), (req, res) => {
    res.send('Hellow World')
}

app.listen(PORT, ()=>{
    console.log('listening on port'+PORT )
} )