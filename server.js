const express = require('express');
const {formatHtml} = require('./formatHtml');

const PORT = 3001;

const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send(formatHtml());
})

app.listen(PORT, ()=>{
    console.log('listening on port'+PORT )
} )

