const express = require('express');
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: 'dori donitza' },
  { id: 2, name: 'itay lol' },
  { id: 3, name: 'eitan levi' },
];

// Get all users
app.get('/users', (req, res) => {
  return res.json(users);
});

// Add a new user
app.post('/add-user', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'name is required' });
  }
  const existingUser = users.find(user => user.name === name);
  if (existingUser) {
    return res.status(400).json({ error: 'name already exists' });
  }

  const newuser = { id: users.length + 1, name };
  users.push(newuser);
  return res.status(201).json(users);
});

// Change user name
app.patch('/change-name', (req, res) => {
  const { id } = req.body;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'name is required' });
  }

  const user = users.find(user => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  user.name = name;
  return res.json(users);
});

// Delete a user by ID
app.delete('/delete-user', (req, res) => {
  const { id } = req.body;
  const userIndex = users.findIndex(user => user.id === parseInt(id));

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(userIndex, 1);
  return res.json({ message: `User with ID ${id} deleted`, users });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
