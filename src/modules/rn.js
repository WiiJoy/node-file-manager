import { rename } from 'node:fs/promises'
import { resolve, dirname, join } from 'node:path'

const rn = async (string) => {
    let stringArr = string.split(' ')

    if (stringArr.length !== 3) {
        err()
    } else {
        await handleRename(stringArr[1], stringArr[2])
    }
}

const handleRename = async (oldName, newName) => {
    const oldFileName = resolve(oldName)
    const newFileName = join(dirname(oldFileName), newName)

    try {
        await rename(oldFileName, newFileName)
    } catch (error) {
        err()
    }
}

const err = () => {
    console.error('Operation failed')
}

export default rn