import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // console.log(good);
  const options = ['good', 'neutral', 'bad'];

  const increment = name => {
    // console.log(name);

    if (name === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (name === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (name === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    const totalFeedbacks = good + neutral + bad;
    return totalFeedbacks;
  };
  const countPositiveFeedbackPercentage = () => {
    const positivPercentage =
      Math.round((good / countTotalFeedback()) * 100) || 0;
    return positivPercentage;
  };

  return (
    <Layout>
      <GlobalStyle />
      <div>
        <Section title={'Please, leave feedback'}>
          <FeedbackOptions options={options} onLeaveFeedback={increment} />
        </Section>

        <Section title={'Statistics'}>
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    </Layout>
  );
};
