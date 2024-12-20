import store from '@store'
import projects from '../../../_setup/projects.js'
import taxonomy from "../../../_setup/taxonomy.js"

const onMount = () => {

   // Set the active project
   store.activeProject = projects.selected

   // Save the store
   localStorage.setItem('id-projects', JSON.stringify(store))

   const phases = taxonomy.phase.map(phase => phase.value)
   const allProjects = projects.projects.filter(project => !project.archived)

   // Redirect to the active project phase, if the url is the root
   if (location.pathname == '/') {
      location.href = `/${store.activeProject}/${phases[0]}/`
      return
   }

   // Redirect to the active project phase, if the url is the project root
   for (const project of allProjects) {
      if (project.slug == location.pathname.slice(1, -1)) {
         location.href = `/${project.slug}/${phases[0]}/`
         return
      }
   }
}

export default onMount