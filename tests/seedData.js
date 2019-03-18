const Random = require('../lib/models/Random');
const chance = require('chance').Chance();

module.exports = () => {
  return Promise.all([...Array(100)].map(() => {
    return Random.create({
      text: chance.sentence()
    });
  })
  );
};
