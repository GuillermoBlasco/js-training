

const configureDnaRoutes = (app) => {
  app.post('/dna', (req, res) => {
    const result = dnaCheck(req.body.text1, req.body.text2);
    res.send({name: 'Hello World!', result: result});
  });
};

module.exports = {
  configureDnaRoutes,
}
