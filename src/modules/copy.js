import { createWriteStream, createReadStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { rm } from 'node:fs/promises'
import { resolve, parse, join } from 'node:path'

const copy = async (obj) => {
    let stringArr = obj.string.split(' ')

    if (stringArr.length !== 3) {
        err()
    } else {
        await handleCopy(stringArr[1], stringArr[2], obj.type)
    }
}

const handleCopy = async (read, write, type) => {
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
        err()
    }
}

const err = () => {
    console.error('Operation failed')
}

export default copy