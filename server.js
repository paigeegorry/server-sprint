require('dotenv').config();
require('./lib/utils/connect')();
const app = require('./lib/app.js');

const PORT = process.env.PORT || 7891;

app.listen(PORT, () => {
  console.log(`server connected on ${PORT}`);
});
