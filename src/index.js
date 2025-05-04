import { argv, stdout, stdin, chdir, cwd } from 'node:process'
import { EOL, homedir } from 'node:os'
import { outputCurrentDir } from './modules/common.js'

import mdl from './modules/index.js'

const filesManager = async () => {
    const userString = argv.filter(arg => arg.startsWith('--username'))
    const username = userString[0].split('=')[1]

    chdir(homedir())

    const readStream = stdin

    readStream.on('data', async (chunk) => {
        const string = chunk.toString().trim()
        await mdl(string)

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

await filesManager()
