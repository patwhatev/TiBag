const lib = require('lib');

/**
* Basic "Hello World" intent, can receive a `name` parameter
* @param {string} name Your name
* @returns {string}
*/
module.exports = (name = 'bee yacht sh', callback) => {

  return callback(null, `Brrrrr ding da ding ding ${name}`);

};
