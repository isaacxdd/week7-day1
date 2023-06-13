// Import Dependencies:

const express = require("express")
const port = 3000
const app = express()


// Routes:
app.get("/greeting", (req, res)=>{
    res.send("Hello Stranger")
})
app.get("/greeting/:name", (req, res)=>{
    const givenName = req.params.name
    res.send(`Wow! Hello there, ${givenName} `)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});