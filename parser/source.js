const fs = require('fs')

let source = fs.readFileSync('source.csv', 'utf-8')

source = source.split('\n')
source = source.slice(1)

function createSourceArrayOfObject(array) {
    let arrayOfObjects = []

    for(let i = 0; i < array.length; i++){
        let each = array[i]
        each = each.split(',')
        arrayOfObjects.push({
            amount: each[2],
            description: each[3],
            date: each[0],
            id: each[1],
        })
    }

    return arrayOfObjects
}

const sourceArrayOfObjects = createSourceArrayOfObject(source)

module.exports = sourceArrayOfObjects