const express = require ("express")
const app = express();

let numberOfVisits = 0;

app.get("/", (req, res) => {
    console.log("Listening on port 3005");
    numberOfVisits++;
    console.log(numberOfVisits);
    res.send("Hello Cohort 10.1! Yulonda here! Hear me roar!!")
})

app.get("/universe", (req, res) => {
    res.send("I am looking at the 'Universe' page on the back-end!")
})

app.listen(3005, () => {
    console.log("I am listening on PORT 3005");
})