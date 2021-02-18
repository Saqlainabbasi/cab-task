const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

//mongoose database configurations and connection setup..........
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, });



require('dotenv').config();
const cabRoutes = require('./routes/cabRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(bodyParser.json());
app.use(cabRoutes);
app.use(adminRoutes);



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Example app listening on port port!`
    )
})