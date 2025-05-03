import { resolve } from 'node:path'
import { rm as remove } from 'node:fs'

const rm = async (string) => {
    const stringArr = string.split(' ')

    if (stringArr.length !== 2) {
        err()
    } else {
        const fileToRemove = resolve(stringArr[1])
        remove(fileToRemove, (err) => {
            if (err) console.error('Operation failed')
        })
    }
}

export default rm
