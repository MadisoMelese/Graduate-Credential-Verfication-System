const Certificate = require('../models/Certificate');
const processExcelFile = require('../utils/excelProcessor');

exports.uploadExcelData = async (req, res) => {
    try {
        const data = await processExcelFile(req.file);
        await Certificate.insertMany(data);
        res.status(200).json({ message: 'Data uploaded successfully' });
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: 'Failed to upload data', error });
        
    }
};
