import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = props => {
  return (
    <>
      <p>
        {props.parts.name} {props.parts.exerciseNumber}
      </p>
    </>
  );
};

const Content = props => {
  return (
    <>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </>
  );
};

const Total = props => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.parts[0].exerciseNumber +
          props.parts[1].exerciseNumber +
          props.parts[2].exerciseNumber}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exerciseNumber: 10 },
      { name: "Using props to pass data", exerciseNumber: 7 },
      { name: "State of a component", exerciseNumber: 14 }
    ]
  };

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
