// Mock data store
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  getUsers: async () => {
    await delay(500);
    return { data: users };
  },

  // Add a new user
  addUser: async (userData) => {
    await delay(500);
    const newUser = {
      id: users.length + 1,
      ...userData
    };
    users.push(newUser);
    return { data: newUser };
  },

  // Delete a user
  deleteUser: async (userId) => {
    await delay(500);
    users = users.filter(user => user.id !== userId);
    return { data: { id: userId } };
  },

  // Update a user
  updateUser: async (userId, userData) => {
    await delay(500);
    users = users.map(user => 
      user.id === userId ? { ...user, ...userData } : user
    );
    return { data: users.find(user => user.id === userId) };
  }
}; 