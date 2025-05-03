import { open } from 'node:fs/promises'
import { cwd } from 'node:process'
import { join } from 'node:path'
import { handleError } from './common.js'

const add = async (file) => {  
    const fileName = join(cwd(), file)
    try {
        await open(fileName, 'ax')
    } catch (error) {
        handleError()
    }
}

export default add