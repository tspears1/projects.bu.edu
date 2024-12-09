import { LocalDB } from "./local-database.js"

const config = JSON.parse(Deno.readTextFileSync("../project.config.json"))
const projectCode = config.project.code

class ProjectDB extends LocalDB {
   constructor( ...args ) {
      super( ...args )
   }

   /**
    * Read post data from file.
    *
    * @param {string} path
    * @returns {Promise<object>} post
    */
   async readPostData(path) {
      return await Deno.readTextFile(path).then(post => JSON.parse(post))
   }

   /**
    * Break file relative path into `structure`, `postType`, and `slug`.
    */
   breakPath(path) {
      const regex = /^\/(?<structure>[^\/]+)\/(?<postType>[^\/]+)\/(?<slug>[^\/]+)\.json$/
      const matches = path.match(regex)
      return matches ? matches.groups : null
   }

   /**
    * Create new post data.
    *
    * @param {string} path
    * @returns {Promise<object>} post
    */
   async createPostData(path) {
      const { structure, postType, slug } = this.breakPath(path)
      const id = this.createNewId()
      const post = await this.readPostData(path)
      return { id, structure, postType, slug, ...post }
   }

   /**
    * Query Map for post data that matches structure, postType, and slug.
    *
    * @param {string} path
    * @returns {object} post
    */
   queryPost(path) {
      const { structure, postType, slug } = this.breakPath(path)
      const result = this.dataArray.find((entry) => {
         const post = entry[1]
         if (!Object.hasOwn(post, 'structure')
            || !Object.hasOwn(post, 'postType')
            || !Object.hasOwn(post, 'slug')) {
               return
         }
         if (post.structure === structure
            && post.postType === postType
            && post.slug === slug) {
               return entry
         }
      })
      return result ? result[1] : null
   }
}

const db = new ProjectDB(projectCode)

export { ProjectDB, db }