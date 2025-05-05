import { stdout, cwd } from 'node:process'
import { EOL } from 'node:os'

const ARGS_COUNT = [
    ['up', 'ls', '.exit'],
    ['cd', 'cat', 'add', 'mkdir', 'rm', 'os', 'hash'],
    ['rn', 'cp', 'mv', 'compress', 'decompress']
]

const checkArgs = (args) => {
    let count = ARGS_COUNT.findIndex(item => item.includes(args[0]))

    if (count < 0) throw new Error(`Invalid input: the command does not exist`)
    if (args.length !== count + 1) throw new Error(`Invalid input: the command ${args[0]} must have ${count} arguments`)
}

const outputCurrentDir = () => {
    setTimeout(() => {
        stdout.write(`
        You are currently in ${cwd()}${EOL}
        `)
    }, 10)
}

const handleError = (text = 'Operation failed') => {
    console.error(`
        ${text}
    `)
}

export { checkArgs, outputCurrentDir, handleError }