const app = require('./app');
const connectDB = require('./db/connectDB');
const { PORT, MONGODB_URI } = require('./utils/config');
// Start the server and connect to MongoDB

const start = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await connectDB(MONGODB_URI);
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

start();
