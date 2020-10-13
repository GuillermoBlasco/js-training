const express = require('express')
const bodyParser = require('body-parser')
const configureDnaRoutes = require('./src/dna/route').configureDnaRoutes;
const numberToOrdinal = require('./ordinals_logic').numberToOrdinal;
const app = express();
const port = 3000;
app.use(require('easy-livereload')());

app.use(bodyParser.json());

configureDnaRoutes(app);

app.post('/numberToOrdinal', (req, res) => {
  const result = numberToOrdinal(req.body.number);
  res.send({name:'Hello World!', result: result});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
