const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/media/getAllImages', (req, res) => {
  request('http://52.88.225.198:8000/api/media', function (error, response, body) {
  	if (!error && response.statusCode == 200) {
      res.send({data: body});
    } else {
      console.log("error calling endpoint from express: " + error);
    }
  })
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));