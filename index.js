const express = require("express");
const helmet = require("helmet");

const app = express();
app.use((helmet()));

const PORT = process.env.PORT || 3000;


// // GET ROUTE
 app.get('/', (req,res) => { res.send("Hello and Welcome") });


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});