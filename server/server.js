require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router')
const connectDB = require('./utils/db');



const corsOptions ={
    origin:'http://localhost:5173',
    // methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,            //access-control-allow-credentials:true
   
}


app.use(cors(corsOptions));
app.use(express.json());
app.use('/',authRoute);
app.use('/contactForm',contactRoute);

const port = 5000;
connectDB();
app.listen(port, () => console.log(`Server started on ${port}`));


