var proxy = require("html2canvas-proxy")
var express = require("express")
var port = process.env.PORT || 4000

var app = express()
app.use("/", proxy())

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
