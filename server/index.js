const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/proxy/*', (req, res) => {
  const url = req.path.replace('/proxy/', '');
  const queryString = require('querystring').stringify(req.query);

  console.log(`proxy'd url: ${url}?${queryString}`);

  axios
    .get(`${url}?${queryString}`)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(PORT, function () {
  console.log(`CORS-enabled proxy server listening on port ${PORT}`);
});
