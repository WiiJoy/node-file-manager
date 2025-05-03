import { resolve } from 'node:path'
import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'
import { handleError } from './common.js'

const hash = (file) => {
    try {
        calculateHash(file)
    } catch (error) {
        handleError()
    }
}

const calculateHash = (file) => {
    const fileToRead = resolve(file)
    
    const readStream = createReadStream(fileToRead)
    const hash = createHash('sha256')

    readStream.on('data', chunck => {
        hash.update(chunck)
    })

    readStream.on('error', () => console.error(`
        Operation failed
    `))

    readStream.on('end', () => console.log(`
        Hash for file: ${hash.digest('hex')}
    `))
}

export default hash