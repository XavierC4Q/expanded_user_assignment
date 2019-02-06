const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const app = express()

const users = require("./routes/users")

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors())

app.use("/users", users)

app.use("*",(req, res, next) => {
    let error = {}
    error.message = "INVALID ROUTE. CHECK PATH."
    error.status = 400

    next(error)
})

app.use((err, req, res, next) => {
    res.json(err).status(500)
})

app.listen(4500, () => {
    console.log('localhost:4500')
})

