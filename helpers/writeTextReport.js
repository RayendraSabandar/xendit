const fs = require('fs')

function writeTextReport(validProxyRecords, sourceLength, proxyLength) {
    let header = 'Summary report\r\n'
    let dateRange = ''
    const recordsProcessed = `Number of records processed: ${sourceLength + proxyLength}\r\n`
    let totalDeletedRecords = 0
    let totalAddedRecords = 0

    for(let i = 0; i < validProxyRecords.length; i++) {
        const eachRecord = validProxyRecords[i]
        if (i == 0) {
            dateRange += `${eachRecord.date} until `
        } else if(i == validProxyRecords.length - 1) {
            dateRange += `${eachRecord.date}`
        }

        if(eachRecord.remarks === 'Record added; not present in proxy') totalAddedRecords ++
        if(eachRecord.remarks === 'Record deleted; not present in source') totalDeletedRecords ++
    }

    let dateRangeText = `Date range: ${dateRange}\r\n`
    let deletedRecordText = `Deleted records: ${totalDeletedRecords}\r\n`
    let addedRecordText = `Added records: ${totalAddedRecords}`

    const result = `${header}${dateRangeText}${recordsProcessed}${deletedRecordText}${addedRecordText}`
    fs.writeFileSync('output/summary-report.txt', result)
}

module.exports = writeTextReport