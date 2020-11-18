const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});

app.post('/api/email', (req, res, next) => {
    sendGrid.setApiKey('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');
    const msg = {
        to: 'sarasilviavalente@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }
    console.log(req.body);

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});

app.listen(3000, '0.0.0.0');