import React, { useState } from "react";
import PersonForm from "./components/PersonForm";
// import Persons from "./components/Persons";
// import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("add new name..");
  const [newNumber, setNewNumber] = useState("add number...");
  const [searchName, setSearchName] = useState("");

  let filteredName = persons.filter(person => {
    return person.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1;
  });

  const addName = event => {
    event.preventDefault();

    const checkExistingName = persons.filter(person => {
      return person.name.includes(newName);
    });

    if (checkExistingName.length === 1) {
      alert(`${newName} is already in your phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      };

      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = event => {
    setSearchName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      Search:
      <input value={searchName} onChange={handleSearchChange} />
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <div>
        {filteredName.map(person => {
          return (
            <p>
              {person.name} {person.number}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default App;
