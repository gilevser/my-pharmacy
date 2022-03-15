const { User } = require('../db/models');

const getNameLocals = async (req, res, next) => {
  const user = await User.findAll({ limit: 1, raw: true, order: [['createdAt', 'DESC']] });
  console.log(user);
  if (user.length) {
    res.locals.username = user[0].name;
    console.log(res.locals.username);
    next();
  } else {
    next();
  }
};

module.exports = { getNameLocals };
