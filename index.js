const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')

// Use the express.static middleware to serve static content
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/test', (req, res) => {
    //res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.json({result: "ok"})
});

app.post('/test', (req, res) => {
    //res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log(req.body)

    request.post(
        'https://n8n-dev.lpservices.io/webhook-test/test',
        { json: req.body },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
    );

    res.json({result: "ok"})
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});