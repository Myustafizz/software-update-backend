const express = require('express');
const app = express();
const path = require('path');
const updates = require('./data/updates.json');

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
