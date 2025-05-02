import { chdir, cwd } from 'node:process'
import { resolve, parse } from 'node:path'

const cd = (string) => {
    const stringArr = string.split(' ')

    if (stringArr.length < 2) {
        err()
    } else {
        handleChangeDir(stringArr[1])
    }
}

const handleChangeDir = (path) => {
    const rootDir = parse(cwd()).root
    const toPath = resolve(path)

    if (toPath.startsWith(rootDir)) {
        changeDir(toPath)
    }
}

const changeDir = (path) => {
    try {
        chdir(path)
    } catch (error) {
        err()
    }
}

const err = () => {
    console.error('Operation failed')
}

export default cd