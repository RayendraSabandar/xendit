const fs = require('fs')

let proxy = fs.readFileSync('proxy.csv', 'utf-8')

proxy = proxy.split('\n')
proxy = proxy.slice(1)

function createProxyArrayOfObject(array) {
    let arrayOfObjects = []

    for(let i = 0; i < array.length; i++){
        let each = array[i]
        each = each.split(',')
        arrayOfObjects.push({
            amount: each[0],
            description: each[1],
            date: each[2],
            id: each[3],
        })
    }

    return arrayOfObjects
}

const proxyArrayOfObjects = createProxyArrayOfObject(proxy)

module.exports = proxyArrayOfObjects