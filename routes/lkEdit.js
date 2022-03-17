const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

function failAuth(res, err) {
  return res.status(401).json({ err });
}

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  // console.log('ловим айдишник-->', id);
  res.render('lkEdit');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    name, email, password,
  } = req.body;
  try {
    const user = await User.findOne({ where: { id } });
    const hashedPassword = await bcrypt.hash(password, 10);
    user.set({
      login: name, email, password: hashedPassword,
    });
    req.session.destroy((err) => {
      if (err) return next(err);
      res.clearCookie('Cookie');
      console.log('это будет наш юзер===>', user);
      // res.sendStatus(200); // * Жизненный цикл заканчивается у ручки
    // res.status(200).end();  // * то же самое
    });
    await user.save();
    const now = new Date().toLocaleDateString();
    // записываем в req.session.user данные (id & name) (создаем сессию)
    req.session.user = {
      id: user.id,
      name: user.login,
      email: user.email,
      createdAt: now,
    };
    console.log('req.session НОВАЯ----->', req.session);
  } catch (err) {
    console.error('Err message: ', err.message);
    console.error('Err code: ', err.code);
    return failAuth(res, err.message);
  }
  res.status(200).redirect('/main');
});
module.exports = router;
