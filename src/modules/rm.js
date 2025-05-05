import { resolve } from 'node:path'
import { rm as remove } from 'node:fs/promises'
import { handleError } from './common.js'

const rm = async (file) => {
    const fileToRemove = resolve(file)
    try {
        await remove(fileToRemove)
    } catch (error) {
        handleError()
    }
}

export default rm
