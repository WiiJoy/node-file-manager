import { EOL, homedir, cpus, userInfo, arch } from 'node:os'
import { handleError } from './common.js'

const os = (param) => {
    switch (param) {
        case '--EOL':
            EOLOutput()
            break
        case '--cpus':
            cpusOutput()
            break
        case '--homedir':
            homeOutput()
            break
        case '--username':
            usernameOutput()
            break
        case '--architecture':
            archOutput()
            break
        default:
            handleError('Invalid input: wrong parameter')
    }
}

const cpusOutput = () => {
    const currCpus = cpus()
    console.log(`
        Amount of cpus: ${currCpus.length}
    `)

    for (let i = 0; i < currCpus.length; i++) {
        console.log(`
            CPU #${i+1}:
                Model: ${currCpus[i].model}
                Clock Rate: ${(currCpus[i].speed / 1000).toFixed(2)} GHz
        `)
    }
}

const EOLOutput = () => {
    console.log(`
        Default system End-Of-Line: ${JSON.stringify(EOL)}
    `)
}

const homeOutput = () => {
    console.log(`
        Home directory: ${homedir()}
    `)
}

const usernameOutput = () => {
    console.log(`
        Current system user name: ${userInfo().username}
    `)
}

const archOutput = () => {
    console.log(`
        CPU architecture: ${arch()}
    `)
}

export default os