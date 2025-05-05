import { resolve } from 'node:path'
import { createReadStream } from 'node:fs'
import { access, constants } from 'node:fs/promises'
import { stdout } from 'node:process'
import { EOL } from 'node:os'
import { handleError } from './common.js'

const cat = async (file) => {
    const fileToRead = resolve(file)
    try {
        await access(fileToRead, constants.F_OK)
        const readStream = createReadStream(fileToRead, 'utf-8')

        readStream.pipe(stdout)

        readStream.on('end', () => {
            stdout.write(EOL)
        })
    } catch (error) {
        handleError('Operation failed')
    }
}

export default cat