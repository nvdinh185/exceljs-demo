const Excel = require('exceljs');

module.exports = async function readExcel() {
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile('export.xlsx');
  const worksheet = workbook.getWorksheet('My Sheet');
  console.log("Number of rows: ", worksheet.actualRowCount);
  console.log("Number of columns: ", worksheet.actualColumnCount);
  for (var i = 1; i <= worksheet.actualRowCount; i++) {
    for (var j = 1; j <= worksheet.actualColumnCount; j++) {
      let data = worksheet.getRow(i).getCell(j).toString();
      console.log(data);
    }
    console.log();
  }

}