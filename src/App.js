
import React, { useState } from 'react';
import UserList from './UserList';
import UserDetail from './UserDetail';
import './styles.css'; 

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>LISTA DE USUARIOS Y SUS PUBLICACIONES</h1>
        </div>
        <div className="card-content">
          <div className="user-list">
            <UserList onUserSelect={handleUserSelect} />
          </div>
          <div className="user-detail">
            <UserDetail user={selectedUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
