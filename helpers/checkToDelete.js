function checkToDelete(proxy, sourceIDs){
    let result = []
    for(let i = 0; i < proxy.length; i++) {
        const eachProxyRecord = proxy[i]
        const isPresent = sourceIDs.includes(eachProxyRecord.id)
        
        if(isPresent) {
            result.push(eachProxyRecord)
        }
    }

    return result
}

module.exports = checkToDelete