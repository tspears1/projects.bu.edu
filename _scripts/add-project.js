import { slugify } from '../_cms/utils/slugify.js'
// ask for project name
// suggest slug
// should new project be set as selected current project? y/n
// build project with { id, title, slug, selected, archived: false }
// add project to _projects/index.js array

/**
* Add new project to _projects/index.js
*
* @param {string} title - Project title.
* @param {string} [slug=''] - Project slug.
* @param {boolean} [selected=true] - Is project selected as current project?
* @param {boolean} [archived=false] - Should project be archived and hidden as selectable option in UI?
*/
const addProject = (title, slug = '', selected = true, archived = false ) => {
  const project = {
    title,
    slug: slug ?? slugify(title),
    selected,
    archived
  }
  // check if file exists. if not, create file and array.
  // if so, get array
  const projectArray = Deno.readTextFileSync(`${Deno.cwd()}/_projects/index.js`)
  if (!projectArray) {
    console.warn('No project array found.')
    return
  }
  // add project to array.
  // if set as selected, deselect any other projects
  // write new array to file.
}

export { addProject }
