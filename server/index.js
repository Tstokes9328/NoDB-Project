const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const handler = require('./Handler/handler')

const app = express();
app.use(bodyParser.json());

app.get('/api/people/jedi', handler.jedis)
app.post('/api/people/jedi', handler.addJedi)
app.delete('/api/people/jedi/:id', handler.removeJedi)
app.put('/api/people/jedi/:id', handler.updateJedi)

app.listen(3001, () => {console.log("I'm listening...")})