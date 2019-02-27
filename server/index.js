require('dotenv').config();
const express = require('express');
const app = express();

const sequelize = require('./db');
const bodyParser = require('body-parser');

const user = require('./controllers/usercontroller');

const bottler = require('./controllers/bottlercontroller');
const distiller = require('./controllers/distillercontroller');
const grain = require('./controllers/graincontroller');
const note = require('./controllers/notecontroller');
const owner = require('./controllers/ownercontroller');
const rating = require('./controllers/ratingcontroller');
const region = require('./controllers/regioncontroller');
const spirit = require('./controllers/spiritcontroller');
const type = require('./controllers/typecontroller');

sequelize.sync();
app.use(bodyParser.json());
app.use(require('./middleware/headers'));

app.use('/api/user', user)

app.use('/api/bottler', bottler)
app.use('/api/distiller', distiller)
app.use('/api/grain', grain)
app.use('/api/note', note)
app.use('/api/owner', owner)
app.use('/api/rating', rating)
app.use('/api/region', region)
app.use('/api/spirit', spirit)
app.use('/api/type', type)

app.get('/', (req, res) => res.sendfile('index.html'));

app.listen(process.env.PORT,() => console.log(` ${process.env.NAME} is listening on ${process.env.PORT}`));