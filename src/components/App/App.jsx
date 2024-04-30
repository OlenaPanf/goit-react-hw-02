import { useState } from 'react'
import './App.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'

export default function App() {
  
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  return (
    <>
      <Description />
      <Options feedbackTypes={feedbackTypes}/>
      <Feedback feedbackTypes={feedbackTypes}/>
    </>
  )
}

