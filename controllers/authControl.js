const bcrypt = require('bcrypt');
const { User } = require('../db/models');

// * проверка на наличие введённых данных
exports.isValid = (req, res, next) => {
  const { name, email, password } = req.body;
  if (name && email && password) next();
  else res.status(401).end();
};

// * создаем пользователя и сессию ___ регистрация
exports.createUserAndSession = async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log('req.body: ', req.body);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      login: name,
      email,
      password: hashedPassword,
    });
    const now = new Date();
    // записываем в req.session.user данные (id & name) (создаем сессию)
    req.session.user = { id: user.id, name: user.login, createdAt: now };
    console.log('req.session----->', req.session);
  } catch (err) {
    console.error('Err message: ', err.message);
    console.error('Err code: ', err.code);
    return failAuth(res, err.message);
  }
  // ответ 200 + автоматическое создание и отправка cookies в заголовке клиенту
  res.status(200).redirect('/main');
};
// * проверяем на наличие юзера и создаём сессию ____авторизация(логин)
exports.checkUserAndCreateSession = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // ищем пользователя в бд
    const user = await User.findOne({ where: { email }, raw: true });
    if (!user) return failAuth(res, ' Неправильное имя/пароль');
    // сравниваем хэш из бд с хэшем введённого пароля
    const isValidPass = await bcrypt.compare(password, user.password);
    if (!isValidPass) return failAuth(res, 'Неправильное имя\\пароль');
    // записываем в req.session.user данные (id & name) (создаем сессию)
    req.session.user = { id: user.id, name: user.login };
    console.log('req.session----->', req.session);
  } catch (err) {
    console.error('Err message: ', err.message);
    console.error('Err code: ', err.code);
    return failAuth(res, err.message);
  }
  // ответ 200 + автоматическое создание и отправка cookies в заголовке клиенту
  res.status(200).redirect('/main');
};
// * закрываем сессию
exports.destroySession = (req, res, next) => {
  // eslint-disable-next-line consistent-return
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie('Cookie');
    res.redirect('/main');
  });
};
function failAuth(res, err) {
  return res.status(401).json({ err });
}
