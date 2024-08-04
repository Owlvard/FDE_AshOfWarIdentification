import csvToJson from 'convert-csv-to-json'
import * as fs from 'fs'
import * as path from 'path'
import { ParamJson } from './types'
import { changeFileExt } from './util'

(async () => {
    try {
        const csvFiles = await fs.promises.readdir('./data/params/csv')
        
        for (const csvFile of csvFiles) {
            let json: ParamJson = csvToJson
                .fieldDelimiter(',')
                .formatValueByType(true)
                .getJsonFromCsv(path.join('./data/params/csv', csvFile))

            
            json = json
                .filter(e => e.sortId !== 999_999 && e.sortId !== 9_999_999) // don't include cut content
                .filter(e => e.Name !== '') // assume no name means a faulty row
                .filter(e => !Object.hasOwn(e, 'wepType') || e.ID.toString().endsWith('0000')) // don't include alternate affinities

            fs.writeFileSync(path.join('./data/params/json', changeFileExt(csvFile, '.json')), JSON.stringify(json, null, 4), 'utf8')
        }
    }
    catch (e) {
        console.error(e)
    }
})()
