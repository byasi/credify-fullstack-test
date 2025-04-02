import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  if (!users.length) {
    return <p>No users found.</p>;
  }

  return (
    <div className="user-list">
      <h2>Users</h2>
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <div className="user-actions">
              <button
                className="btn-secondary"
                onClick={() => onEdit(user)}
              >
                Edit
              </button>
              <button
                className="btn-danger"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList; 