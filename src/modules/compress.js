import { createReadStream, createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib'
import { pipeline } from 'node:stream'

const gzip = async (obj) => {
    const stringArr = obj.string.split(' ')

    if (stringArr.length < 3) {
        err()
    } else {
        const sourceFile = resolve(stringArr[1])
        const destinationFile = resolve(stringArr[2])
        const archive = dataToHandle(obj.type)

        const source = createReadStream(sourceFile)
        const destination = createWriteStream(destinationFile)

        pipeline(source, archive, destination, (error) => {
            if (error) err()
        })
    }
}

const dataToHandle = (type) => {
    if (type === 'compress') {
        return createBrotliCompress()
    } else {
        return createBrotliDecompress()
    }
}

const err = () => {
    console.error('Operation failed')
}

export default gzip