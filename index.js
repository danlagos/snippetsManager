const express = require('express');
const mongoose = require('mongoose');

// set up server

const app = express();

app.listen(5000, ()=> console.log(`server started in port 5000`));

