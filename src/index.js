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
                break
            case 'cd':
                break
            case 'ls':
                await mdl.ls()
                break
            case 'cat':
                break
            case 'add':
                break
            case 'mkdir':
                await mdl.mkdir(string)
                break
            case 'rn':
                break
            case 'cp':
                break
            case 'mv':
                break
            case 'rm':
                break
            case 'os':
                mdl.os(string)
                break
            case 'hash':
                break
            case 'compress':
                break
            case 'decompress':
                break
            default:
                stdout.write(`Invalid input${EOL}`)
                break
        }
    })
    stdout.write(`
        Welcome to the File Manager, ${username}${EOL}
        You are currently in ${cwd()}
    `)

    process.on('SIGINT', () => process.exit())
    process.on('exit', () => {
        stdout.write(`
            ${EOL}Thank you for using File Manager, ${username}, goodbye!${EOL}
        `)
    })
    
}

await filesManager()