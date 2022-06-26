const fs = require('fs')

function writeFile(validProxyRecords) {
    let arrToStr = 'Amt,Descr,Date,ID\r\n'
        for (let i = 0; i < validProxyRecords.length; i++) {
          let eachPerson = validProxyRecords[i];
    
          let { amount, description, date, id } = eachPerson;
          if (i === validProxyRecords.length -1) {
            arrToStr += `${amount},${description},${date},${id}`
          } else {
            arrToStr += `${amount},${description},${date},${id}\r\n`
          }
        }
    
    fs.writeFileSync('output/output-report.csv', arrToStr)
}

module.exports = writeFile