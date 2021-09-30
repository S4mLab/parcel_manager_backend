const express = require('express');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('this is the main page of Parcel Manager');
});

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
});
