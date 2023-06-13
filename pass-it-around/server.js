const express = require("express")
const app = express()


// Routes

app.get("/", (req,res)=>{
    const totalBottles = 99
    res.send(`${totalBottles} Bottles of beer on the wall. <br><br> <a href="/98">take one down, pass it around</a>`)
})

app.get("/:number_of_bottles", (req,res)=>{
    const totalBottles = req.params.number_of_bottles
    if(totalBottles!==0  && totalBottles>0){
        const remainingBottles = totalBottles-1
        res.send(`${totalBottles} Bottles of Beer on the wall. <br> <br><a href ="/${remainingBottles}"> take one down, pass it around</a>`)
    }
    else{
        res.send(`No more Bottles of Beer on the wall.<br><br><a href="/">Start Over</a> `)
    }

})

// Listener
app.listen(3200,()=>{
    console.log("port 3200 is up and running");
})