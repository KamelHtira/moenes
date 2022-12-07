
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(5000, () => console.log('Exame-maker is listening on port 5000.'));  