const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/media/getAllImages', (req, res) => {
  request('http://52.32.199.147:8000/media/getAllImages', function (error, response, body) {
  	if (!error && response.statusCode == 200) {
      res.send({data: body});
    } else {
      console.log(error);
    }
  })
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));