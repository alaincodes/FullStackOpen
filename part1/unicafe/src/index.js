import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Statistic = props => {
  const { text, value } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = props => {
  const { good, neutral, bad } = props;
  let totalFeed = good + neutral + bad;
  let average = (good - bad) / (good + bad + neutral);
  let positive = (good / (good + neutral + bad)) * 100;

  if ((good || neutral || bad) === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statistic text="good:" value={good} />
          <Statistic text="neutral:" value={neutral} />
          <Statistic text="bad:" value={bad} />
          <Statistic text="all:" value={totalFeed} />
          <Statistic text="average:" value={average.toFixed(1)} />
          <Statistic text="positive:" value={positive.toFixed(1)} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
