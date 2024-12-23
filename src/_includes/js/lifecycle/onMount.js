import store from '@store'
import projects from '../../../_setup/projects.js'
import taxonomy from "../../../_setup/taxonomy.js"

const onMount = () => {

   // Set the active project
   store.activeProject = projects.selected

   // Save the store
   localStorage.setItem('id-projects', JSON.stringify(store))

   const phases = taxonomy.phases.map(phase => phase.value)

   // Redirect to the active project phase, if the url is the root
   if (location.pathname == '/') {
      location.href = `/${store.activeProject}/`
      return
   }
}

export default onMount