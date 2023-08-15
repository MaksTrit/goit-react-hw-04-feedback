import { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../Feedback/FeedbackOptions';
import { Layout } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyle';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    const arrOfValues = [good, neutral, bad];
    const total = arrOfValues.reduce(
      (prevValue, value) => prevValue + value,
      0
    );
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!good) {
      return 0;
    }
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Layout>
      <GlobalStyle />
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={addFeedback}
      />
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Layout>
  );
};
