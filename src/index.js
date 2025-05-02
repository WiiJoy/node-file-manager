import { argv } from 'node:process'

const filesManager = () => {
    const userString = argv.filter(arg => arg.startsWith('--username'))
    const username = userString[0].split('=')[1]
    console.log('Welcome to the File Manager, ', username)
    
}

filesManager()