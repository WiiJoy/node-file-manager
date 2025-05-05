import { cwd, chdir } from 'node:process'
import { parse } from 'node:path'

const up = () => {
    const currPath = cwd().toString()
    const rootDir = parse(cwd()).root.toString()
    if (currPath !== rootDir) {
        chdir('..')
    }
}

export default up