import { useState, useEffect } from 'react'
import './App.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'

export default function App() {
  
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  useEffect(() => {
    const savedFeedbackTypes = localStorage.getItem('feedbackTypes');
    if (savedFeedbackTypes) {
      setFeedbackTypes(JSON.parse(savedFeedbackTypes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = feedbackType => {
    setFeedbackTypes(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positiveFeedback = Math.round(((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100);

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  return (
    <>
      <Description />
      <Options feedbackTypes={feedbackTypes} updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
      {totalFeedback > 0 ? (
        <Feedback feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/>
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  )
}

