import store from '@store'
import projects from '../../../_setup/projects.js'

const onMount = () => {

   // Set the active project
   store.activeProject = projects.selected

   // Save the store
   localStorage.setItem('id-projects', JSON.stringify(store))

   // Redirect to the active project phase, if the url is the root
   if (location.pathname == '/') {
      location.href = `/${store.activeProject}/`
      return
   }
}

export default onMount