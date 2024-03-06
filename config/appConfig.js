require("dotenv").config();

module.exports = {
    'secret': process.env.secret,
    'captchaKey': process.env.captchaKey
};