import { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../Feedback/FeedbackOptions';
import { Layout } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyle';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    this.setState(prevState => {
      return { [event.target.name]: prevState[event.target.name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const arrOfValues = Object.values(this.state);
    const total = arrOfValues.reduce(
      (prevValue, value) => prevValue + value,
      0
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (!this.state.good) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Layout>
        <GlobalStyle />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.addFeedback}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Layout>
    );
  }
}
