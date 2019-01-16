
// ?? Do my templated variables need single quotes around them for postgresql to accept?
module.exports = {
  createUser: (username, password) => `INSERT INTO users (username, password) 
    VALUES (${username}, ${password});`,

  findUser: username => `SELECT * FROM users WHERE username = ${username};`,

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
  }) => `INSERT INTO characters
    (user_id, name, race, class, con, str, dex, int, wis, cha, inventory, notes)
    VALUES (${userId}, ${name}, ${race}, ${playerClass}, ${con}, 
    ${str}, ${dex}, ${int}, ${wis}, ${cha}, ${inventory}, ${notes});`,

  findAllCharacters: userId => `SELECT * FROM characters WHERE user_id = ${userId};`,

  findOneCharacter: (userId, characterId) => `SELECT * FROM characters 
    WHERE _id = ${characterId};`,

};
