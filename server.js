const express = require('express');
const dotenv = require('dotenv');
const { application } = require('express');


// set config path to load env variables

dotenv.config({ path: './config/config.env' });


const PORT = process.env.PORT || 5000;

application.listen(PORT,
    console.log(`server is running in ${process.env.NODE_ENV} mode on ${PORT} port`));