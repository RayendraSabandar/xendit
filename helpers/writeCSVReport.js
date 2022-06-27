const fs = require('fs')

function writeCSVReport(validProxyRecords) {
    let result = 'Amt,Descr,Date,ID,Remarks\r\n'
        for (let i = 0; i < validProxyRecords.length; i++) {
          let eachRecord = validProxyRecords[i];
    
          let { amount, description, date, id, remarks } = eachRecord;
          if (i === validProxyRecords.length -1) {
            result += `${amount},${description},${date},${id}`
            remarks ? result += `,${remarks}` : null
          } else {
            remarks ? result += `${amount},${description},${date},${id},${remarks}\r\n` : result += `${amount},${description},${date},${id}\r\n`
          }
        }
    
    fs.writeFileSync('output/output-report.csv', result)
}

module.exports = writeCSVReport