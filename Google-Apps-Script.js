/**
 * Google Apps Script for Clemson Makerspace Printer Status
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Click "Deploy" > "New deployment"
 * 5. Choose "Web app" as the type
 * 6. Set "Execute as" to "Me"
 * 7. Set "Who has access" to "Anyone"
 * 8. Click "Deploy"
 * 9. Copy the Web App URL and use it in your HTML file
 */

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  const printers = [];
  
  // Row positions in the sheet
  const printerNameRow = 1;
  const lastUpdateRow = 2;
  const statusRow = 3;
  const percentRow = 4;
  const timeRemainingRow = 5;
  const printNameRow = 7;
  
  // Scan through columns to find printers
  for (let col = 0; col < data[0].length; col++) {
    const cellValue = data[printerNameRow][col] ? data[printerNameRow][col].toString().trim() : '';
    
    // Check if this column contains a printer name
    if (cellValue && (cellValue.includes('Mini') || cellValue.includes('Adobe') || cellValue.includes('TAZ'))) {
      const printerName = cellValue;
      const statusValue = data[statusRow][col + 1] ? data[statusRow][col + 1].toString().trim() : '';
      const percentValue = data[percentRow][col + 1] ? data[percentRow][col + 1].toString().trim() : '';
      const timeValue = data[timeRemainingRow][col + 1] ? data[timeRemainingRow][col + 1].toString().trim() : '';
      const printJobValue = data[printNameRow][col + 1] ? data[printNameRow][col + 1].toString().trim() : '';
      const lastUpdateValue = data[lastUpdateRow][col + 1] ? data[lastUpdateRow][col + 1].toString().trim() : '';
      
      // Determine printer type/model from name
      let model = 'Unknown';
      let location = 'Makerspace';
      if (printerName.includes('Mini')) {
        model = 'Prusa Mini';
        location = 'Watt';
      } else if (printerName.includes('Adobe')) {
        model = 'Prusa Adobe';
        location = 'Cooper';
      } else if (printerName.includes('TAZ')) {
        model = 'LulzBot TAZ';
      }
      
      printers.push({
        name: printerName,
        status: statusValue,
        model: model,
        location: location,
        progress: percentValue,
        timeRemaining: timeValue,
        currentJob: printJobValue,
        lastUpdate: lastUpdateValue
      });
    }
  }
  
  // Return JSON response with CORS headers
  const output = JSON.stringify({
    success: true,
    timestamp: new Date().toISOString(),
    printers: printers
  });
  
  return ContentService
    .createTextOutput(output)
    .setMimeType(ContentService.MimeType.JSON);
}
