import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = props => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const handleVoteBtn = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  const handleRandomBtn = () => {
    const getRandomAnecdotes = Math.floor(Math.random() * anecdotes.length);
    setSelected(getRandomAnecdotes);
  };

  const largestVotes = Math.max(...points);
  const largestAnecdote = props.anecdotes[points.indexOf(largestVotes)];

  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} vote(s)</p>
      <button onClick={handleVoteBtn}>vote</button>
      <button onClick={handleRandomBtn}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{largestAnecdote}</p>
      <p>has {largestVotes} vote(s)</p>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
