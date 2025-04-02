import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { useUsers } from './hooks/useUsers';

function App() {
  const {
    users,
    loading,
    error,
    addUser,
    deleteUser,
    updateUser
  } = useUsers();

  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddUser = async (userData) => {
    try {
      await addUser(userData);
      setShowForm(false);
    } catch (err) {
      console.error('Failed to add user:', err);
    }
  };

  const handleUpdateUser = async (userData) => {
    try {
      await updateUser(editingUser.id, userData);
      setEditingUser(null);
    } catch (err) {
      console.error('Failed to update user:', err);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId);
      } catch (err) {
        console.error('Failed to delete user:', err);
      }
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management System</h1>
      </header>

      {error && <div className="error">{error}</div>}

      {!showForm && !editingUser && (
        <button className="btn-primary" onClick={() => setShowForm(true)}>
          Add New User
        </button>
      )}

      {(showForm || editingUser) && (
        <UserForm
          onSubmit={editingUser ? handleUpdateUser : handleAddUser}
          initialData={editingUser}
          onCancel={() => {
            setShowForm(false);
            setEditingUser(null);
          }}
        />
      )}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <UserList
          users={users}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
        />
      )}
    </div>
  );
}

export default App;
