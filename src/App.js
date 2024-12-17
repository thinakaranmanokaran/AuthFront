import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://authback-jxx5.onrender.com/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUser = async (userData) => {
    try {
      await axios.post('https://authback-jxx5.onrender.com/api/users', userData);
      fetchUsers();
      alert("Registered Successfully ?")
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm addUser={addUser} />
      {/* <UserList users={users} /> */}
    </div>
  );
}

export default App;
