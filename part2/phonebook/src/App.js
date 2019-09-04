import React, { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("add new name..");
  const [newNumber, setNewNumber] = useState("add number...");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons);
    });
  }, []);

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
        number: newNumber
      };

      personService.create(nameObject).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
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
      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        key={persons.id}
        persons={filteredName}
        name={persons.name}
        number={persons.number}
      />
    </div>
  );
};

export default App;
