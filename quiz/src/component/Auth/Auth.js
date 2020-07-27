import axios from 'axios';

export const register = (newUser) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/user/register',
    data: {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    },
  })
    .then((res) => {
      console.log('Registered');
      console.log(res.status);
    })
    .catch((err) => {
      console.log('Some Error while registering   ' + err);
    });
};

export const submitQuest = (newQuestion) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/user/admin/ques',
    data: {
      questionhead: newQuestion.questionhead,
      question: newQuestion.question,
      optionA: newQuestion.optionA,
      optionB: newQuestion.optionB,
      optionC: newQuestion.optionC,
      optionD: newQuestion.optionD,
      answerNum: newQuestion.answerNum,
    },
  })
    .then((res) => {
      console.log(res.status);
    })
    .catch((err) => {
      console.log('Some Error while registering   ' + err);
    });
};

export const login = (user) => {
  return axios
    .post('http://localhost:8080/user/login', {
      username: user.username,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem('usertoken', res.data);
      console.log('Token Inserted');
      return res.data;
    })
    .catch((err) => {
      console.log('Login  :' + err);
      return false;
    });
};

export const checkusername = (user) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/user/checkuser',
    data: {
      username: user.username,
    },
  })
    .then((res) => {
      console.log('Hehe:' + res.status);
      if (res.status === 200) {
        return true;
      }
    })
    .catch(() => {
      return false;
    });
};

export const checkemail = (user) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/user/checkemail',
    data: {
      email: user.email,
    },
  })
    .then((res) => {
      console.log('Hehe:' + res.status);
      if (res.status === 200) {
        return true;
      }
    })
    .catch(() => {
      return false;
    });
};
