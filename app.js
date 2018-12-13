const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const cookieParser = require('cookie-parser');


//connect to database
mongoose.connect(config.database, {
  useNewUrlParser: true
});

// on connection
mongoose.connection.on('connected', () => {
  console.log("connected to database " + config.database);
})

mongoose.connection.on('error', (err) => {
  console.log("database error: " + err);
})

const app = express();

const users = require('./routes/users');
const api = require('./routes/api');

const port = process.env.PORT || 8080;

//CORS middleware
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/api', api);

//index route
app.get('/', (req, res) => {
  res.send('invalid endpoint');
})

// disable this in order to use http get
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// })

app.post('/checkout', (req, res) => {
  console.log(req.body);
  res.status(200).send({
    'message': 'Basket received'
  });
})
//
// app.get('/recipe',(req, res) => {
//   console.log(req.body);
//   res.status(200).send({
//     'message': 'RECIPE GET'
//   });
// })


app.use(cookieParser());

//start server
app.listen(port, () => {
  console.log('Server started on http://localhost:' + port);
})
