import { resolve } from 'node:path'
import { createHash } from 'node:crypto'

const hash = (string) => {
    const stringArr = string.split(' ')

    if (stringArr.length !== 2) {
        err()
    } else {
        calculateHash(stringArr[1])
    }
}

const calculateHash = (file) => {
    const fileToRead = resolve(file)
    const hash = createHash('sha256')
    hash.update(fileToRead)
    console.log(`
    Hash for file: ${hash.digest('hex')}
    `)
}

const err = () => {
    console.error('Operation failed')
}

export default hash