const express = require("express")
require("dotenv").config()

const app = express();

app.get("/", (req, res) => {
    res.send({msg : "API is working"})
})

app.get("/test", (req, res) => {
    res.send({msg : "API testing for the secret " + process.env.secret})
})

app.listen(8000, () => {
    console.log("listening on port 8000")
})