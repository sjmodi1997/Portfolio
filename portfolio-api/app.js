const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.get('/api',(req, res, next) => {
    res.send('API status :: Working2');
});

app.post('/api/email', (req,res,next) => {
    sendGrid.setApiKey('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');
    const msg = {
        to: 'sjmodi1997.sm@gmail.com',
        from: req.body.email,
        subject: 'website contact',
        text: req.body.message
    }
    process.stdout.write(msg.from + "\r");
    process.stdout.write(msg.text + "\r");
    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            });
        })
        .catch(err => {
            console.log('error: ',err);
            res.status(401).json({
                success: false
            });
        });
});

app.listen(3030,'0.0.0.0');