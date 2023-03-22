import React, {useState} from "react";
import { GlobalStyles } from "./GlobalStyles";
import { Layout } from "./Layout.styled";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statictics";
import { Notification } from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleIncrementFeedback = evt => {
    switch (evt.currentTarget.name) {
      case "good":
        setGood(prev => prev + 1) 
        break;
      case "bad":
        setBad(prev => prev + 1) 
        break;
      case "neutral":
        setNeutral(prev => prev + 1) 
        break;
      default:
        break;
    }
  };

  
  const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = (good / total) * 100;
    return Math.round(percentage);
  }




    return (
      <Layout>
        <GlobalStyles />
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onChangeFeedback={handleIncrementFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"/>
          ) : (
            <Statistics good={good} bad={bad} neutral={neutral} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
          )}
        </Section>
      </Layout>
  )
};

