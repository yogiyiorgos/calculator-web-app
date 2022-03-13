const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Simple calculator
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send(`The result of the calculation is ${result}!`)
})

// BMI calculator
app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})


app.post('/bmicalculator', (req, res) => {
    
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var bmi = weight/(height * height);

    res.send(`Your BMI is ${bmi}`);
})


// Server port
app.listen(3000, () => {
    console.log('Server started on port 3000')
})