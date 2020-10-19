const express = require('express')
const bodyParser = require('body-parser')

const configureUserRoutes = require('./src/users').configureRoutes;

const app = express();
const port = 3000;
app.use(require('easy-livereload')());


app.use(bodyParser.json());

configureUserRoutes(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
