import { createWriteStream, createReadStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { rm } from 'node:fs/promises'
import { resolve, parse, join } from 'node:path'
import { handleError } from './common.js'

const copy = async (read, write, type) => {
    try {
        const fileToRead = resolve(read)
        const fileName = parse(fileToRead).base
        const readStream = createReadStream(fileToRead)

        const fileToWrite = join(resolve(write), fileName)
        const writeStream = createWriteStream(fileToWrite)

        await pipeline(readStream, writeStream)

        if (type === 'move') {
            await rm(fileToRead)
        }
    } catch (error) {
        handleError()
    }
}

export default copy