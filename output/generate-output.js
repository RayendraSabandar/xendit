// Bank statement
const source = require('../parser/source')

// Personal record
const proxy = require('../parser/proxy')
const checkToDelete = require('../helpers/checkToDelete')
const checkToPush = require('../helpers/checkToPush')
const writeCSVReport = require('../helpers/writeCSVReport')
const writeTextReport = require('../helpers/writeTextReport')

const sourceIDs = source.map(el => {
    return el.id
})

const proxyIDs = proxy.map(el => {
    return el.id
})

const deletedInvalidRecords = checkToDelete(proxy, sourceIDs)
const pushedValidRecords = checkToPush(source, proxyIDs)

const validProxyRecords = [...deletedInvalidRecords, ...pushedValidRecords]
const totalRecordsProcessed = source.length + proxy.length

writeCSVReport(validProxyRecords)
writeTextReport(validProxyRecords, totalRecordsProcessed)