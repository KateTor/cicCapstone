import React from 'react';
// import './App.css';
import quizQuestions from '../api/quizQuestions';
import Quiz from './Quiz/Quiz';
import Result from './Result';

//sets initial state
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     answersCount: {
       A: 0,
       B: 0,
       C: 0
     },
     result: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

//loads questions
  componentDidMount() {
    this.setState( { question: quizQuestions[0].question,
    answerOptions: quizQuestions[0].answers });

    //fetch api call for quiz questions
    // fetch("/quizQuestions", {
    //   method: "GET"
    // }).then(rawJSON => {
    //   return rawJSON.json();
    // }).then(data => {
    //   this.setState({ question: quizQuestions[0].question })
    // })
  };

  componentDidUpdate() {
    //api call for results?
  }

//uses Update to change answer values based on user's choice
  setUserAnswer(answer) {
    this.setState((state,props) => ({
      answersCount: {
        ...state.answersCount,
        [answer] : (state.answersCount[answer] || 0) + 1},
        answer: answer
    }));
  }

// once user selects answer, the result is recorded and determines if next question is rendered or if results need to be displayed
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
      }
  }

//renders next question
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

// calculates which (A,B or C) has most
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

//returns results?
  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
    //fetch for a/b/c group
  }

renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
  renderResult() {
    return (
      <Result quizResult={this.state.result} />
      // will this have to become fetch requests, post answers for user & get results
    );
  }
  render() {
    return (
        <div className="container">
          <div>
            <h1 className="logo">Pup Ups</h1>
          </div>
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
      );
  }
}

export default App;
