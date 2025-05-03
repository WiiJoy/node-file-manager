import ls from './ls.js'
import os from './os.js'
import mkdir from './mkdir.js'
import up from './up.js'
import cd from './cd.js'
import gzip from './compress.js'
import hash from './hash.js'
import cat from './cat.js'
import rm from './rm.js'
import add from './add.js'
import rn from './rn.js'
import copy from './copy.js'
import { checkArgs, handleError } from './common.js'

const mdl = async (string) => {
    try {
        const args = string.split(' ')
        const command = args[0]

        checkArgs(args)

        switch (command) {
            case '.exit':
                process.exit()
            case 'up':
                up()
                break
            case 'cd':
                cd(args[1])
                break
            case 'ls':
                await ls()
                break
            case 'cat':
                cat(args[1])
                break
            case 'add':
                await add(args[1])
                break
            case 'mkdir':
                await mkdir(args[1])
                break
            case 'rn':
                await rn(args[1], args[2])
                break
            case 'cp':
                await copy(args[1], args[2], 'copy')
                break
            case 'mv':
                await copy(args[1], args[2], 'move')
                break
            case 'rm':
                await rm(args[1])
                break
            case 'os':
                os(args[1])
                break
            case 'hash':
                hash(args[1])
                break
            case 'compress':
                gzip(args[1], args[2], 'compress')
                break
            case 'decompress':
                gzip(args[1], args[2], 'decompress')
                break
        }
    } catch (error) {
        handleError(error.message)
    }
}

export default mdl