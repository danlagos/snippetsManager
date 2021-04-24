const express = require('express');
const mongoose = require('mongoose');

// set up server

const app = express();

app.use(express.json());

app.listen(5000, ()=> console.log(`server started in port 5000`));

// set of routers

app.use("/snippet", require("./routers/snippetRouter"));