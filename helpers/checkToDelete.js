function checkToDelete(proxy, sourceIDs){
    let result = []
    for(let i = 0; i < proxy.length; i++) {
        const eachProxyRecord = proxy[i]
        const isPresent = sourceIDs.includes(eachProxyRecord.id)
        
        if(isPresent) {
            result.push(eachProxyRecord)
        } else {
            eachProxyRecord.remarks = 'Record deleted; not present in source'
            result.push(eachProxyRecord)
        }
    }

    return result
}

module.exports = checkToDelete