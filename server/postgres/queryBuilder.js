
module.exports = {
  createUser: (username, password) => ({
    string: 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *;',
    values: [username, password],
  }),

  findUser: username => ({
    string: 'SELECT * FROM users WHERE username = $1;',
    values: [username],
  }),

  createCharacter: (userId, {
    name,
    race,
    playerClass,
    con,
    str,
    dex,
    int,
    wis,
    cha,
    inventory,
    notes,
  }) => ({
    string: 'INSERT INTO characters (user_id, name, race, class, con, str, dex, int, wis, cha,inventory, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *;',
    values: [userId, name, race, playerClass, con, str, dex, int, wis, cha, inventory, notes],
  }),

  findAllCharacters: userId => ({
    string: 'SELECT * FROM characters WHERE user_id = $1;',
    values: [userId],
  }),

  findOneCharacter: characterId => ({
    string: 'SELECT * FROM characters WHERE _id = $1;',
    values: [characterId],
  }),

};
