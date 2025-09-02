const express = require('express');
const app = express();
const path = require('path');
const updates = require('./data/updates.json');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 3000;

// Swagger setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Software Version Release API',
      version: '1.0.0',
      description: 'API to find software version release dates',
    },
  },
  apis: ['./routes/*.js'], // Adjust this path if needed
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Sample route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 3000;

// Swagger setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Software Version Release API',
      version: '1.0.0',
      description: 'API to find software version release dates',
    },
  },
  apis: ['./routes/*.js'], // Adjust this path if needed
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Sample route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get updates by year
app.get('/api/updates', (req, res) => {
  const years = req.query.year;
  if (!years) return res.json([]);

  const selectedYears = Array.isArray(years) ? years : [years];
  const filtered = updates.filter(update => selectedYears.includes(String(update.year)));
  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Software Version Release API',
      version: '1.0.0',
      description: 'API to find software version release dates',
    },
  },
  apis: ['./routes/*.js'], // Adjust path to where your route files are
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


