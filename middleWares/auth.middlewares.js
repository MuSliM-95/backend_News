const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).json({ error: "Нет доступа" });
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
      return res.status(400).json({ error: `Неверный тип токина` });
    } 
    req.user = await jwt.verify(token, process.env.SECRET);

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Ошибка авторизации " + error.toString() });
  }
};
