import store from '@store'
import projects from '../../../_setup/projects.js'
import { buildProjectSprintObject, filterSprints, sortSprints } from "../app/index.js"

const onMount = () => {
   // Redirect to the active project phase, if the url is the root
   if (location.pathname == '/') {
      location.href = `/${store.activeProject}/`
      return
   }

   // Set the active project
   store.activeProject = projects.selected

   // Build sprints object and add to store
   buildProjectSprintObject()

   // Render sprints for the active project phase
   //filterSprints(store.phase)

   // Sort sprints by date
   //sortSprints(store.sort)

   // Save the store
   //localStorage.setItem('id-projects', JSON.stringify(store))
}

export default onMount