const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Add error handling
  if (isNaN(userId) || userId <= 0) {
    return res.status(400).send({ error: 'Invalid user ID' });
  }
  // ... further logic to fetch user data, including error handling ...
  // Example using try...catch
  try {
    const user = await getUser(userId); // Replace getUser with your logic
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.send({ userId });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send({ error: 'Failed to fetch user' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));