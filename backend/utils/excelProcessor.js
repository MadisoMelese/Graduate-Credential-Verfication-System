const exceljs = require('exceljs');

const processExcelFile = async (file) => {
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(file.path);
    const worksheet = workbook.getWorksheet(1);
    let data = [];

    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber !== 1) { // Skip header row
            data.push({
                certificateId: row.getCell(1).value,
                studentName: row.getCell(2).value,
                internshipDomain: row.getCell(3).value,
                startDate: row.getCell(4).value,
                endDate: row.getCell(5).value
            });
        }
    });

    return data;
};

module.exports = processExcelFile;
