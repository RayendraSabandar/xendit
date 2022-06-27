function checkToPush(source, proxyIDs){
    let result = []
    for(let i = 0; i < source.length; i++) {
        const eachSourceRecord = source[i]
        const isPresent = proxyIDs.includes(eachSourceRecord.id)
        
        if(!isPresent) {
            eachSourceRecord.remarks = 'Record added; not present in proxy'
            result.push(eachSourceRecord)
        }
    }

    return result
}

module.exports = checkToPush