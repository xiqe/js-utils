const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, '/')));

app.listen(3000,()=>{
    console.log("服务开启在3000端口")
})
