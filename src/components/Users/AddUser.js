import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from './AddUser.module.css';

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState("");

  function addUserHandler(event) {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 ||enteredAge.trim().length === 0) {
      return;
    }

    if(+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }

  function usernameChangeHandler(event){
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="text"
          value={enteredAge}
          onChange={ageChangeHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;