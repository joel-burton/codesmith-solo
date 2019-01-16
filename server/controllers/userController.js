const db = require('../postgres/db');
const q = require('../postgres/queryBuilder');

const user = {};


user.create = (req, res, next) => {
  const { username, password } = req.body;
  const query = q.createUser(username, password);
  db.one(query)
    .then((user) => {
      console.log(Object.keys(user));
      next();
    })
    .catch((err) => {
      res.locals.error = err;
      next({ type: 'db' });
    });
};

user.login = (req, res, next) => {
  console.log('logged in user');
  next();
};

user.logout = (req, res, next) => {
  console.log('logged out user');
  next();
};


module.exports = user;
