import React from "react";
import { useState } from 'react';
import Header from './component/Header'
import FeedbackList from './component/FeedbackList'
import FeedbackData from './data/FeedbackData'
import "./style.css";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header /> 
      <div className="container">
        <FeedbackList feedback = {feedback} />
        {/* <h1> My App </h1> */}
      </div>
    </>
  )
}

export default App