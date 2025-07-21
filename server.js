// Import the Express.js library
const express = require('express');
// Import cors to allow cross-origin requests from your React app
const cors = require('cors');

// Create an instance of the Express application
const app = express();
// Define the port the server will listen on
const port = 3001; // Using a different port than React (which typically runs on 3000)

// Middleware:
// Enable CORS for all routes. This is crucial for your React app (running on a different port)
// to be able to make requests to this backend.
app.use(cors());
// Enable parsing of JSON request bodies. This allows you to receive JSON data from the frontend.
app.use(express.json());

// --- Routes ---

// 1. Home/Root Route
// A simple GET request to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the TEP Clone Backend API!');
});

// 2. Example: Get Account Summary
// This route simulates fetching a user's account summary.
app.get('/api/account-summary/:userId', (req, res) => {
  const { userId } = req.params; // Get userId from URL parameters

  // In a real application, you would fetch this data from a database.
  // Here, we're using mock data.
  const mockAccountData = {
    'user123': {
      name: 'John Doe',
      accountNumber: '1234567890',
      currentBill: {
        amount: 125.75,
        dueDate: '2025-08-15',
        status: 'Due'
      },
      energyUsage: '250 kWh last month',
      messages: ['Your bill is due soon!', 'New energy-saving tips available.']
    },
    'user456': {
      name: 'Jane Smith',
      accountNumber: '0987654321',
      currentBill: {
        amount: 89.20,
        dueDate: '2025-08-20',
        status: 'Paid'
      },
      energyUsage: '180 kWh last month',
      messages: ['Thank you for your recent payment.']
    }
  };

  const account = mockAccountData[userId];

  if (account) {
    res.status(200).json(account); // Send the mock data as JSON
  } else {
    res.status(404).json({ message: 'User account not found.' });
  }
});

// 3. Example: Report Outage
// This route simulates reporting an outage. It expects a POST request with JSON data.
app.post('/api/report-outage', (req, res) => {
  const { location, description, contactInfo } = req.body; // Get data from request body

  // In a real application, you would save this data to a database
  // or trigger an internal process.
  console.log('New Outage Reported:');
  console.log(`Location: ${location}`);
  console.log(`Description: ${description}`);
  console.log(`Contact Info: ${contactInfo}`);

  // Simulate a successful response
  res.status(200).json({
    message: 'Outage reported successfully!',
    receivedData: { location, description, contactInfo },
    outageId: `OUT${Date.now()}` // A simple unique ID
  });
});

// 4. Example: Get Energy Saving Tips
// This route provides a list of energy-saving tips.
app.get('/api/energy-tips', (req, res) => {
  const tips = [
    "Adjust your thermostat: Set it higher in summer and lower in winter.",
    "Unplug electronics: Devices still consume power when turned off (phantom load).",
    "Use energy-efficient appliances: Look for the Energy Star label.",
    "Seal air leaks: Caulk and weatherstrip around windows and doors.",
    "Switch to LED lighting: They use significantly less energy and last longer.",
    "Optimize laundry: Wash full loads in cold water.",
    "Maintain your HVAC system: Regular maintenance improves efficiency."
  ];
  res.status(200).json(tips);
});

// Start the server
app.listen(port, () => {
  console.log(`TEP Clone Backend listening at http://localhost:${port}`);
  console.log('To run this server:');
  console.log('1. Make sure you have Node.js installed.');
  console.log('2. Save this code as a .js file (e.g., server.js).');
  console.log('3. Open your terminal in the same directory.');
  console.log('4. Run `npm init -y` to create a package.json.');
  console.log('5. Install dependencies: `npm install express cors`');
  console.log('6. Run the server: `node server.js`');
  console.log('The server will then be accessible at http://localhost:3001');
});
