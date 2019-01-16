
const character = {};


character.create = (req, res, next) => {
  console.log('Created a new character for this user!');
};

character.getAll = (req, res, next) => {
  console.log('Got all characters for this user from DB');
  next();
};

character.getOne = (req, res, next) => {
  console.log('Got this character from DB');
  next();
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
