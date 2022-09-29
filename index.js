const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 4000

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;