import React from "react";

const Persons = ({ persons }) => {
  return (
    <>
      {persons.map(human => (
        <p key={human.name.toString()}>
          {human.name} {human.number}
        </p>
      ))}
    </>
  );
};

export default Persons;
