import React from "react";
import Header from './component/Header'
import FeedbackItem from './component/FeedbackItem'
import "./style.css";

export default function App() {
  return (
    <>
      <Header /> 
      <div className="container">
        <FeedbackItem />
        {/* <h1> My App </h1> */}
      </div>
    </>
  )
}

export default App