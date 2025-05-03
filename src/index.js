import { argv, stdout, stdin, chdir, cwd } from 'node:process'
import { EOL, homedir } from 'node:os'

import * as mdl from './modules/index.js'

const filesManager = async () => {
    const userString = argv.filter(arg => arg.startsWith('--username'))
    const username = userString[0].split('=')[1]

    chdir(homedir())

    const readStream = stdin

    readStream.on('data', async (chunk) => {
        const string = chunk.toString().trim()
        console.log('string', string)
        const command = string.split(' ')[0]

        switch (command) {
            case '.exit':
                process.exit()
            case 'up':
                mdl.up()
                break
            case 'cd':
                mdl.cd(string)
                break
            case 'ls':
                await mdl.ls()
                break
            case 'cat':
                mdl.cat(string)
                break
            case 'add':
                await mdl.add(string)
                break
            case 'mkdir':
                await mdl.mkdir(string)
                break
            case 'rn':
                await mdl.rn(string)
                break
            case 'cp':
                break
            case 'mv':
                break
            case 'rm':
                await mdl.rm(string)
                break
            case 'os':
                mdl.os(string)
                break
            case 'hash':
                mdl.hash(string)
                break
            case 'compress':
                mdl.gzip({
                    string: string,
                    type: 'compress'
                })
                break
            case 'decompress':
                mdl.gzip({
                    string: string,
                    type: 'decompress'
                })
                break
            default:
                stdout.write(`Invalid input${EOL}`)
                break
        }
        outputCurrentDir()
    })
    stdout.write(`
        Welcome to the File Manager, ${username}
    `)
    outputCurrentDir()

    process.on('SIGINT', () => process.exit())
    process.on('exit', () => {
        stdout.write(`
            ${EOL}Thank you for using File Manager, ${username}, goodbye!${EOL}
        `)
    })
}

const outputCurrentDir = () => {
    setTimeout(() => {
        stdout.write(`
        You are currently in ${cwd()}${EOL}
        `)
    }, 10)
}

await filesManager()