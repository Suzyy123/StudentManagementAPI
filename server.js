const express = require("express");
const app = express(); //creates and express application
app.use(express.json()); //converting josn into js object
app.get("/", (req, res)=>{ //req clients send res server send
res.send("Student Record API Running")
})
const PORT = 5000; //just like a door number for the server

app.listen(PORT, () => { //starts the server without this nothing runs
console.log("Server is running ")
});

