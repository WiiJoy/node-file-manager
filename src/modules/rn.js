import { rename } from 'node:fs/promises'
import { resolve, dirname, join } from 'node:path'
import { handleError } from './common.js'

const rn = async (oldName, newName) => {
    try {
        const oldFileName = resolve(oldName)
        const newFileName = join(dirname(oldFileName), newName)
        await rename(oldFileName, newFileName)
    } catch (error) {
        handleError()
    }
}

export default rn