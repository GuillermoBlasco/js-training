
const models = require('../mongo');

const validateId = (req, res, next) => {
  if (models[req.params.entity] === undefined) {
    res.status(400).send({ message: "The entity " + req.params.entity + " is not known"});
  }
  if (req.params.id !== undefined && req.params.id.length !== 24) {
    res.status(400).send({ message: "The id should have 24 hex chars"});
  } else {
    return next();
  }
}

const validateEmail = (email) => {
  return email.includes('@');
};


const configureRoutes = (app) => {

  app.post('/register', (req, res) => {
      const userData = req.body;
      if (!validateEmail(userData.email)) {
        res.status(400).send({ message: "Email is wrong", errorCode: 100 });
      }
      models.User.findByEmail(userData.email)
        .then((response) => {
          if (response) {
            res.status(400).send({ message: "Email already exists", errorCode: 101});
          } else {

            const user = new models.User(req.body);
            return user.save()
              .then((response) => {
                res.status(204).send();
              }).catch((err) => {
                res.status(500).send({error: err})
              });
          }
        })

  });

  //Get one by ID
  app.get('/:entity/:id', (req, res) => {
    validateId(req, res, () => {
      const Entity = models[req.params.entity];
      return Entity.findById(req.params.id).then((result) => {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(404).send();
        }
      }).catch((err) => {
        res.status(500).send({error: err})
      })
    });
  });
  // Search
  app.get('/:entity', (req, res) => {
    validateId(req, res, () => {
      const Entity = models[req.params.entity];
      return Entity.find(req.query)
        .then((results) => {
          res.send(results);
        }).catch((err) => {
          res.status(500).send({error: err})
        });
    });
  });
  // CREATE
  app.post('/:entity', (req, res) => {
    validateId(req, res, () => {
      const Entity = models[req.params.entity];
      const newEntity = new Entity({name: req.body.name});
      return newEntity.save().then((result) => {
        res.send(result);
      }).catch((err) => {
        res.status(500).send({error: err})
      });
    });
  });
  // UPDATE BY ID
  app.put('/:entity/:id', (req, res) => {
    validateId(req, res, () => {
      const Entity = models[req.params.entity];
      return Entity.findByIdAndUpdate(req.params.id, req.body, {'new': false})
        .then((result) => {
          if (result) {
            res.status(200).send(result);
          } else {
            res.status(404).send();
          }
        }).catch((err) => {
          res.status(500).send({error: err})
        });
    });
  });
  //DELETE
  app.delete('/:entity/:id', (req, res) => {
    validateId(req, res, () => {
      const Entity = models[req.params.entity];
      return Entity.findByIdAndDelete(req.params.id).then(() => {
        res.status(204).send();
      }).catch((err) => {
        res.status(500).send({error: err})
      });
    });
  });
};

module.exports = {
  configureRoutes,
}
