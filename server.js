const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/media/getAllUserMedia/:userId', (req, res) => {
  url = 'http://52.88.225.198:8000/media/getAllUserMedia/' + req.params.userId;
  request(url, function (error, response, body) {
  	if (!error && response.statusCode == 200) {
      res.send({data: body});
    } else {
      console.log("error calling getAllUserMedia from express: " + error);
    }
  })
});

app.get('/media/getAllVideosUserEvent/:userId/:eventId', (req, res) => {
  url = 'http://52.88.225.198:8000/media/getAllVideosUserEvent/' 
                + req.params.userId + '/0';
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send({data: body});
    } else {
      console.log("error calling getAllVideosUserEvent from express: " + error);
    }
  })
});

//called from login/DeviceSelect component
app.get('/api/user/', (req, res) => {
  request('http://52.88.225.198:8000/api/user', function (error, response, body) {
  	if (!error && response.statusCode == 200) {
      res.send({data: body});
    } else {
      console.log("error calling /api/user/ from express: " + error);
    }
  })
});

//called from login/DeviceSelect component
app.get('/api/device/', (req, res) => {
  request('http://52.88.225.198:8000/api/device', function (error, response, body) {
  	if (!error && response.statusCode == 200) {
      res.send({data: body});
    } else {
      console.log("error calling /api/device/ from express: " + error);
    }
  })
});

//called from App.js
app.post('/api/device/', (req, res) => {
  request('http://52.88.225.198:8000/api/device', function (error, response, body) {
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