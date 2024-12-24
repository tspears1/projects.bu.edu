import { getSprints } from "./_includes/js/utils/get-sprints.js";

export default function* ({ taxonomy, projects, sprints: sprintData}) {
   const activeProjects = projects.projects.filter(project => !project.archived)

   for (const project of activeProjects) {
      let sprints = {}
      for (const phase of taxonomy.phases) {
         sprints = {
            ...sprints,
            [phase.value]: getSprints(sprintData, project.slug, phase.value)
         }
      }

      yield {
         title: project.title,
         url: `/${project.slug}/`,
         selected: project.slug == projects.selected ? 'true' : 'false',
         slug: project.slug,
         description: project.description,
         layout: 'layouts/project.jsx',
         bodyClasses: 'template-projects',
         projectSprints: sprints,
      }
   }
}