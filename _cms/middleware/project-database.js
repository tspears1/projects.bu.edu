import { LocalDB } from "./local-database.js"

const config = JSON.parse(Deno.readTextFileSync("../project.config.json"))
const projectCode = config.project.code

class ProjectDB extends LocalDB {
   constructor( ...args ) {
      super( ...args )
   }
}

const db = new ProjectDB(projectCode)

export { ProjectDB, db }