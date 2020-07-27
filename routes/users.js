const express = require('express');
const users = express.Router();
const cors = require('cors');
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoos = require('mongoose');
const User = require('../models/Users');
const Ques = require('../models/Questions');
users.use(cors());
process.env.SECRET_KEY = 'secret';

users.post('/admin/ques', (req, res) => {
  const today = new Date();
  let answerNum = req.body.answerNum;
  var answer;
  console.log(answerNum);
  if (answerNum == 1) {
    answer = req.body.optionA;
  }
  if (answerNum == 2) {
    answer = req.body.optionB;
  }
  if (answerNum == 3) {
    answer = req.body.optionC;
  }
  if (answerNum == 4) {
    answer = req.body.optionD;
  }
  const questionData = new Ques({
    questionhead: req.body.questionhead,
    question: req.body.question,
    optionA: req.body.optionA,
    optionB: req.body.optionB,
    optionC: req.body.optionC,
    optionD: req.body.optionD,
    answer: answer,
  });

  questionData
    .save()
    .then((doc) => {
      res
        .status(201)
        .json({ message: 'Question Save Successfully', result: doc });
    })
    .catch((err) => {
      res.status(200).send({ massage: err });
    });
});

users.get('/questions', (req, res) => {
  Ques.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', error);
    });
});

users.post('/register', (req, res) => {
  const today = new Date();

  var username = req.body.username;
  var email = req.body.email;

  bcrypt.hash(req.body.password, 12, (err, hash) => {
    if (err) {
      return res.json({ message: 'Something went wrong' });
    } else {
      console.log(hash);
      const userDate = new User({
        username: username,
        email: email,
        password: hash,
      });
      userDate
        .save()
        .then((doc) => {
          res
            .status(201)
            .json({ message: 'User Registered Successfully', result: doc });
        })
        .catch((err) => {
          res.status(200).send({ massage: 'User Already exist' });
        });
    }
  });
});

users.post('/checkemail', (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      console.log(user);
      if (user) {
        return res.status(200).send('User Exist');
      } else {
        return res.status(401).send({ message: 'no user' });
      }
    })
    .catch((err) => {
      return res.status(200).send('Error');
    });
});
users.post('/checkuser', (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user) {
        return res.status(200).send('User Exist');
      } else {
        console.log(user);
        return res.status(401).send({ message: 'no user' });
      }
    })
    .catch((err) => {
      return res.status(200).send('Error');
    });
});
users.post('/login', (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(
            {
              userid: user._id,
              username: user.username,
            },
            process.env.SECRET_KEY,
            {
              expiresIn: '1h',
            }
          );
          res.status(201).json({ message: 'User found', token: token });
        } else {
          res.status(404).json({ message: 'User not found ' });
        }
      } else {
        res.status(404).json({ message: 'Auth failed' });
      }
    })
    .catch((err) => {
      res.json({ Error: 'Something went wrong', error: err });
    });
});

module.exports = users;
