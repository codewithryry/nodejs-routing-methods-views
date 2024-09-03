const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});