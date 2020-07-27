import React from 'react';
import './Appcss.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import Navbar from './component/Layout/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './component/Layout/Home';
import Quiz from './component/Layout/QuizLayout';
import Quizresult from './component/Quiz/Result';
import QuizInstruction from './component/Quiz/QuizInstruction';
import Footer from './component/Layout/Footer';
import Test from './component/Layout/Testques';
import SubmitQuiz from './component/Quiz/SubmitQuiz';
import Register from './component/Auth/Register';
import Login from './component/Auth/Login';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/' component={Home} exact />
            <PrivateRoute path='/c++/quiz' component={Quiz} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <PrivateRoute path='/c++/result' component={Quizresult} />
            <Route path='/quiz/submit' component={SubmitQuiz} />
            <Route path='/test' component={Test} />
            <PrivateRoute
              path='/quiz/QuizInstruction'
              component={QuizInstruction}
            />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.usertoken ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

export default App;
