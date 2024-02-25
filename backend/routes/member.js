const express = require('express');
const router = express.Router();
const memberController = require('../controllers/member');

router.get('/', memberController.getMembers);
router.post('/add', memberController.addMember);

module.exports = router;