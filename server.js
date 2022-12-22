const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const session = require('express-session');

const homeRoutes = require('./Controllers/home-routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.use('/', homeRoutes)

app.get('/', (req, res) =>{
    res.render('main')
})

app.listen(PORT, () =>
  console.log(`Example app listening at <http://localhost>:${PORT}`)
);