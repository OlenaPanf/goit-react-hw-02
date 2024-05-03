export default function Options ({ feedbackTypes, updateFeedback }) {
    
    return (
      <>
        <div>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
        </div>
      </>
    );
}