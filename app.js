const express = require('express');
const cors = require('cors')
const studentRoutes=require('./Routes/StudentRoutes.js')


require('dotenv').config();



const app = express();

const PORT = process.env.PORT || 3000;


app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/Student",studentRoutes);

app.listen(PORT,()=>{

    console.log(`Server is running on port ${PORT} `);

})


