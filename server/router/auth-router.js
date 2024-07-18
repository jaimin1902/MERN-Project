const express=require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controllers')
const singupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middlewares");





router.route('/').get(authControllers.home);

router.route('/register').post(validate(singupSchema),authControllers.register);

router.route('/login').post(authControllers.login);



module.exports=router;