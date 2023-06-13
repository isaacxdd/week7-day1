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

app.get("/tip/:total/:tipPercentage", (req, res)=>{
  const tota = req.params.total
  const tipPer = req.params.tipPercentage
  const totalTips = (tipPer/tota)*100
  res.send(`The tip of ${tota} dollar with ${tipPer} percentage tip is $${totalTips}`)

})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});