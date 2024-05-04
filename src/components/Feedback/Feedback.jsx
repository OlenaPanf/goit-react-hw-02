import css from './Feedback.module.css'
export default function Feedback({ feedbackTypes, totalFeedback, positiveFeedback }) {
  
  return (
    <div className={css.container}>
      <p>Good: {feedbackTypes.good}</p>
      <p>Neutral: {feedbackTypes.neutral}</p>
      <p>Bad: {feedbackTypes.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}