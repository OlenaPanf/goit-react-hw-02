export default function Options ({ feedbackTypes }) {
    
    return (
        <>
            <div>
                <button>Good: {feedbackTypes.good}</button>
                <button>Neutral: {feedbackTypes.neutral}</button>
                <button>Bad: {feedbackTypes.bad}</button>
            </div>
        </>
    );
}