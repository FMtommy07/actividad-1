
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList({ onUserSelect }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleMouseEnter = (index) => {
    document.getElementById(`user-${index}`).style.backgroundColor = '#f0f0f0';
  };

  const handleMouseLeave = (index) => {
    document.getElementById(`user-${index}`).style.backgroundColor = '#fff';
  };

  return (
    <div>
      <h2>USUARIOS</h2>
      <ul>
        {users.map((user, index) => (
          <li
            key={user.id}
            id={`user-${index}`}
            className="user-list-item"
            onClick={() => onUserSelect(user)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <span>{user.name}</span>
            <button onClick={(e) => {
              e.stopPropagation(); 
              onUserSelect(user);
            }}>Buscar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
