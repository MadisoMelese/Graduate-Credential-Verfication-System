const express = require('express');
const multer = require('multer');
const { uploadExcelData } = require('../controllers/adminController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), uploadExcelData);

module.exports = router;
