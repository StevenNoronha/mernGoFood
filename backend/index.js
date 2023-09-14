const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000
const mongoDB = require('./db');
require('dotenv').config()

app.use(cors({ origin: 'https://gofood-order-mern.netlify.app' }));

mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use('/api', require('./routes/CreateUser'));
app.use('/api', require('./routes/DisplayData'));
app.use('/api', require('./routes/OrderData'));


app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})
