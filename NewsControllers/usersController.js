const User = require("../NewsModels/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userController = {
  userRegistrationController: async (req, res) => {
    try {
      const { nickname, role, login, password } = req.body;
      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await User.create({
        login: login,
        password: hash,
        nickname,
        role
      });
      res.json(user);
    } catch (error) {
      res.json({ error: error.message });
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
    const user = await User.findById(req.params.id)  
    res.json(user)
} catch (error) {
    res.json({ error: error.message });
}
  },

  patchController: async (req, res) =>{
try {
    const { nickname, role,  } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, {
        nickname,
        role
    }, {new: true})
    res.json(user)
} catch (error) {
    res.json({ error: error.message });
}
},

deleteController: async (req, res) => {
try {
    const user = await User.findByIdAndRemove(req.params.id)
    res.json('Пользователь удален')
} catch (error) {
    
}
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
 