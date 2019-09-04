import React from "react";

const Persons = ({ persons }) => {
  return (
    <>
      {persons.map(human => (
        <>
          <p>
            {human.name} {human.number}
            <button>delete</button>
          </p>
        </>
      ))}
    </>
  );
};

export default Persons;
