import { mkdir as mkdirNode } from 'node:fs/promises'
import { cwd } from 'node:process'
import { join } from 'node:path'
import { handleError } from './common.js'

const mkdir = async (dir) => {
    const dirName = join(cwd(), dir)
    try {
        await mkdirNode(dirName)
    } catch (error) {
        handleError()
    }
    
}

export default mkdir