const User = require("../NewsModels/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userController = {
  userRegistrationController: async (req, res) => {
    try {
      const { nickname, login, password, role } = req.body;
      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await User.create({
        nickname,
        login: login,
        password: hash,
        role,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    } 
  },

  getController: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  getUserIdController: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  patchController: async (req, res) => {
    try {
      const { nickname, name, surname, age, role } = req.body;
      const { filename } = req.file
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          image: filename,
          imageSrc: req.file ? req.file.path : '',
          nickname, 
          name,
          surname,
          age,
          role,
        }, 
        { new: true }
      );
      res.json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  deleteController: async (req, res) => {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      res.json("Пользователь удален");
    } catch (error) {}
  },

  login: async (req, res) => {
    const { login, password } = req.body;
    const condidate = await User.findOne({ login }); // ПО логину находит и сохраняет  юзера в condidate

    if (!condidate) {
      return res.status(404).json({ error: "Не приавильный логин или пороль" });
    }
    const valid = await bcrypt.compare(password, condidate.password); // condidate тут сохранен юзер оттуда берем пороль и сравниваем

    if (!valid) {
      return res.status(404).json({ error: "Не приавильный логин или пороль" });
    }
    const payload = {
      id: condidate._id,
      login: condidate.login,
    };

    const token = await jwt.sign(payload, process.env.SECRET, {
      expiresIn: "24h",
    });

    res.json({
      token,
      user: payload.id,
    });
  },
};
