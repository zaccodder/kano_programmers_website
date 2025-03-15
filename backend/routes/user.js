const router = require('express').Router();
const { signup, login, getAllUsers } = require('../controllers/users');

router.post('/sign-up', signup);
router.post('/log-in', login);
router.get('/', getAllUsers);

module.exports = router;
