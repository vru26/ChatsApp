var express = require('express');
var app = express();

//your routes here
app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.get('/input', function(req, res) {
  res.sendFile(__dirname + '/Form.html');
})
app.post('/insert', function(req, res) {
    var fetchAction =  require('node-fetch');

    var url = "https://data.litigation47.hasura-app.io/insert";

    var requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        }
    };

    var body = {
        "type": "insert",
        "args": {
            "table": "author",
            "objects": [
                {
                    "name": "abc",
                    "id": "007"
                }
            ]
        }
    };

    requestOptions.body = JSON.stringify(body);

    fetchAction(url, requestOptions)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      console.log(JSON.stringify(result));
    })
    .catch(function(error) {
      console.log('Request Failed:' + error);
    });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
