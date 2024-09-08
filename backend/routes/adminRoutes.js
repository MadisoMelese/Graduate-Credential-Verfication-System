const express = require('express');
const multer = require('multer');
const { uploadExcelData } = require('../controllers/adminController');
const fs = require('fs')
const path = require('path')

const router = express.Router();
// const upload = multer({ dest: './uploads/' });

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
      try {
        const destDir = "./uploads/";
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        cb(null, destDir);
      } catch (error) {
        console.error("Error in destination:", error);
        cb(error, "./uploads/");
      }
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    },
  });
  const upload = multer({ storage: storage });





router.post('/upload', upload.single('file'), uploadExcelData);

module.exports = router;
