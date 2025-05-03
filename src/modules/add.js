import { open } from 'node:fs/promises'
import { cwd } from 'node:process'
import { join } from 'node:path'

const add = async (string) => {
    let stringArr = string.split(' ')

    if (stringArr.length !== 2) {
        err()
    } else {
        const fileName = join(cwd(), stringArr[1])
        await handleCreateFile(fileName)
    }
}

const handleCreateFile = async (fileName) => {
    try {
        await open(fileName, 'ax')
    } catch (error) {
        err()
    }
}

const err = () => {
    console.error('Operation failed')
}

export default add