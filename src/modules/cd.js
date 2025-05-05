import { chdir, cwd } from 'node:process'
import { resolve, parse } from 'node:path'
import { handleError } from './common.js'

const cd = (path) => {
    try {
        const rootDir = parse(cwd()).root
        const toPath = resolve(path)

        if (toPath.startsWith(rootDir)) {
            changeDir(toPath)
        }
    } catch (error) {
        handleError()
    }
}

const changeDir = (path) => {
    try {
        chdir(path)
    } catch (error) {
        handleError()
    }
}

export default cd