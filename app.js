const express = require('express');
const app = express();

app.use(express.static('public'));

const num = 8000;
const PORT = process.env.PORT || num;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
