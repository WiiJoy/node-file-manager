import { readdir } from 'node:fs/promises'
import { cwd } from 'node:process'

const ls = async () => {
    const dir = await readdir(cwd(), {withFileTypes:true})
    const logDir = []

    for (let item of dir) {
        logDir.push({
            'Name': item.name,
            'Type': item.isDirectory() ? 'Directory' : 'File'
        })
    }

    logDir.sort((a, b) => a['Type'].localeCompare(b['Type']))

    console.table(logDir)
}

export default ls
