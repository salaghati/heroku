const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');
const route = require('./routes');

//Connect to DB
db.connect();

//Router init
route(app);
    
app.get('/', (req, res) => {
    res.send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});