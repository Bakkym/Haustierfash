
const express = require('express');
const routes = require('./routes/customes');

const app = express();
app.use(express.json())

app.use('/', routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
