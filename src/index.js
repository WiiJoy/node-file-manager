import { argv, stdout, stdin } from 'node:process'
import { EOL } from 'node:os'

const filesManager = () => {
    const userString = argv.filter(arg => arg.startsWith('--username'))
    const username = userString[0].split('=')[1]

    const readStream = stdin

    readStream.on('data', (chunk) => {
        const string = chunk.toString().trim()
        console.log('string', string)
        const command = string.split(' ')[0]

        switch (command) {
            case '.exit':
                process.exit()
            default:
                stdout.write(`Invalid input${EOL}`)
                break
        }
    })

    stdout.write(`Welcome to the File Manager, ${username}${EOL}`)

    process.on('SIGINT', () => process.exit())
    process.on('exit', () => {
        stdout.write(`${EOL}Thank you for using File Manager, ${username}, goodbye!${EOL}`)
    })
    
}

filesManager()