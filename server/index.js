const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();
const PORT = 3001;

app.use(cors());

app.use('/', (req, res) => {
  const url = req.path.replace('/proxy/', '');
  const queryString = require('querystring').stringify(req.query);

  console.log(`proxy'd url: ${url}?${queryString}`);

  req.pipe(request(`${url}?${queryString}`)).pipe(res);
});

app.listen(PORT, function () {
  console.log(`CORS-enabled proxy server listening on port ${PORT}`);
});
