import { resolve } from 'node:path'
import { createReadStream, access, constants } from 'node:fs'
import { stdout } from 'node:process'
import { EOL } from 'node:os'

const cat = async (string) => {
    const stringArr = string.split(' ')

    if (stringArr.length !== 2) {
        err()
    } else {
        handleReadFile(stringArr[1])
    }
}

const handleReadFile = (file) => {
    const fileToRead = resolve(file)
    access(fileToRead, constants.F_OK, (error) => {
        if (error) {
           err() 
        } else {
            const readStream = createReadStream(fileToRead, 'utf-8')

            readStream.pipe(stdout)

            readStream.on('end', () => {
                stdout.write(EOL)
            })
        }
    })
}

const err = () => {
    console.error('Operation failed')
}

export default cat