const db = require('../postgres/db');
const q = require('../postgres/queryBuilder');

const character = {};


character.create = (req, res, next) => {
  const { query, values } = q.createCharacter(req.body);
  db.one(query, values)
    .then((data) => {
      console.log(Object.values(data));
      res.locals.character = data;
      next();
    })
    .catch((err) => {
      res.locals.error = err;
      next({ type: 'db' });
    });
};

character.getAll = (req, res, next) => {
  const { query, values } = q.findAllCharacters(req.body.userId);
  db.query(query, values)
    .then((data) => {
      console.log(Object.keys(data));
      res.locals.characterList = data;
      next();
    })
    .catch((err) => {
      res.locals.error = err;
      next({ type: 'db' });
    });
};

character.getOne = (req, res, next) => {
  const { query, values } = q.findOneCharacter(req.body.characterId);
  db.one(query, values)
    .then((data) => {
      console.log(Object.values(data));
      res.locals.character = data;
      next();
    })
    .catch((err) => {
      res.locals.error = err;
      next({ type: 'db' });
    });
  // console.log('Got this character from DB');
};


character.update = (req, res, next) => {
  console.log('Updated this character in the DB for you');
  next();
};

character.delete = (req, res, next) => {
  console.log('Deleted this character from the DB');
  next();
};


module.exports = character;
