const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/calculate-tip", (req, res) => {
    const { billAmount, serviceQuality, numberOfPeople } = req.body;
    const tipPerPerson = (billAmount * (serviceQuality / 100)) / numberOfPeople;
    res.json({ tipPerPerson });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
