import { SiteBaker } from 'site/server/SiteBaker'
import * as parseArgs from 'minimist'
const argv = parseArgs(process.argv.slice(2))

async function main(database: string, email: string, name: string, postSlug: string) {
    try {
        console.log(database, email, name, postSlug)
        const baker = new SiteBaker({})

        await baker.bakeAll()
        await baker.deploy(`Updating ${postSlug}`, email, name)
        baker.end()
    } catch (err) {
        console.error(err)
    }
}

main(argv._[0], argv._[1], argv._[2], argv._[3])