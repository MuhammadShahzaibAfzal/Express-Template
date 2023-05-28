const express = require('express');
const dotenv = require('dotenv');


const app = express();
// Configure .env enviornment variable
dotenv.config();
// Allow JSON
app.use(express.json());


app.listen(process.env.APP_PORT,()=>console.log(`Listning on port ${process.env.APP_PORT}`));