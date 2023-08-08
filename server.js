const express = require('express');
const routes = require('./routes');
const sequelize = require('./connection/connections');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// set up server
const app = express();
const PORT = 3002;

// Set up sessions with cookies
const sess = {
    secret: 'Super secret secret',
    cookie: {
      // Stored in milliseconds
      maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
  
  app.use(session(sess));

// handlebars as default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware
app.use(express.json());
app.use(express.static('public'));
// to allow processing of json body
app.use(express.urlencoded({ extended: true}));


//activate routes
app.use(routes);


sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, (res, req) => {
        console.log(`Listening on http://localhost:${PORT}`)})});

