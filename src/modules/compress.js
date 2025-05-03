import { createReadStream, createWriteStream } from 'node:fs'
import { rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib'
import { pipeline } from 'node:stream/promises'
import { handleError } from './common.js'

const gzip = async (sourcePath, destPath, type) => {
    const sourceFile = resolve(sourcePath)
    const destinationFile = resolve(destPath)
    try {
        const archive = dataToHandle(type)

        const source = createReadStream(sourceFile)
        const destination = createWriteStream(destinationFile)

        await pipeline(source, archive, destination)
    } catch (error) {
        await rm(destinationFile)
        handleError()
    }
}

const dataToHandle = (type) => {
    if (type === 'compress') {
        return createBrotliCompress()
    } else {
        return createBrotliDecompress()
    }
}

export default gzip