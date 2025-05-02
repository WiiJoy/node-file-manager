import { mkdir as mkdirNode } from 'node:fs/promises'
import { cwd } from 'node:process'
import { join } from 'node:path'

const mkdir = async (string) => {
    let stringArr = string.split(' ')

    if (stringArr.length < 2) console.log('Operation failed')
    stringArr.shift()
    const dirName = join(cwd(), stringArr.join(' '))
    try {
        await mkdirNode(dirName)
    } catch (error) {
        console.log('Operation failed')
    }
}

export default mkdir