const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
var cors = require('cors');
var mongoose = require('mongoose');
const user = require('./routes/users');
const api = require('./models/Users');
const mongoURI =
  'Own mongo DB URL';
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    process.env.MONGODB_URI ||
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('mongo is connected ');
  })
  .catch((err) => {
    console.log('There is an error with mongoDb' + err);
  });
app.use('/api', api);
app.use('/user', user);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('Quiz/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'quiz', 'build', 'index.html'));
  });
  // app.get('');
}
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
