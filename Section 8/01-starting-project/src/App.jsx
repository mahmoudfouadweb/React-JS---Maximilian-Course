import { useState } from 'react';
import AddNewUser from './components/Users/AddNewUser';
import UserList from './components/Users/UserList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userAge, userName) => {
    return setUsersList(prev => [
      ...prev,
      { name: userName, age: userAge, id: Math.random().toString() }
    ]);
  };
  return (
    <div>
      <AddNewUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
      
    </div>
  );
};

export default App;
