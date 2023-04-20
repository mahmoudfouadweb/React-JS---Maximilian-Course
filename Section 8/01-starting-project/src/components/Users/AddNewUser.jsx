import classes from './AddNewUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { useRef, useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddNewUser = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = e => {
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    e.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({
        title: 'Error',
        message: 'Please fill all fields',
        show: true
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Error',
        message: 'Age must be a positive number',
        show: true
      });
      return;
    }

    onAddUser(enteredAge, enteredUsername);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  /* ----------------------------- FOR useState() ----------------------------- */
  // const usernameChangeHandler = e => {
  //   setEnteredUsername(e.target.value);
  // };
  // const ageChangeHandler = e => {
  //   setEnteredAge(e.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card classname={classes.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type={'submet'} onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddNewUser;
