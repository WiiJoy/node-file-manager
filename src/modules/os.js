import { EOL, homedir, cpus, userInfo, arch } from 'node:os'

const os = (string) => {
    const stringArr = string.split(' ')

    if (stringArr.length !== 2 || !stringArr[1].startsWith('--')) {
        err()
    } else {
        handleParam(stringArr[1])
    }
}

const handleParam = (param) => {
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
            err()
            break
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
    // console.log(`Alternative Home directory: ${userInfo().homedir}`)
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

const err = () => {
    console.log('Operation failed')
}

export default os