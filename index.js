const express = require("express")


const app = express();

app.get("/", (req, res) => {
    res.send({msg : "API is working"})
})

app.get("/test", (req, res) => {
    res.send({msg : "API testing"})
})

app.listen(8000, () => {
    console.log("listening on port 8000")
})