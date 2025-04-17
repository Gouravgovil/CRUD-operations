const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Usermodel = require('./models/Users') // Import User model 
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Crud")

app.get('/', (req, res) => {
    Usermodel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id
    Usermodel.findById({ _id: id })
        .then(user => res.json(user))
        .catch(err => res.json(err))

})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    Usermodel.findByIdAndDelete({ _id: id })
        .then(user => res.json(user))
        .catch(err => res.json(err))
})

app.put('/Updateuser/:id', (req, res) => {
    const id = req.params.id;
    Usermodel.findByIdAndUpdate({ _id: id }, {
        Name: req.body.Name,
        Email: req.body.Email,
        Age: req.body.Age
    })
        .then(user => res.json(user))
        .catch(err => res.json(err))
})

app.post("/Createuser", (req, res) => {
    Usermodel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


app.listen(3002, () => {
    console.log("Server is running")
});
