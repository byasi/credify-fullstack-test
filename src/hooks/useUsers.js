import { useState, useEffect } from 'react';
import { mockApi } from '../services/mockApi';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await mockApi.getUsers();
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (userData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await mockApi.addUser(userData);
      setUsers(prev => [...prev, response.data]);
      return response.data;
    } catch (err) {
      setError('Failed to add user');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId) => {
    try {
      setLoading(true);
      setError(null);
      await mockApi.deleteUser(userId);
      setUsers(prev => prev.filter(user => user.id !== userId));
    } catch (err) {
      setError('Failed to delete user');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (userId, userData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await mockApi.updateUser(userId, userData);
      setUsers(prev => prev.map(user => 
        user.id === userId ? response.data : user
      ));
      return response.data;
    } catch (err) {
      setError('Failed to update user');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error,
    fetchUsers,
    addUser,
    deleteUser,
    updateUser
  };
}; 