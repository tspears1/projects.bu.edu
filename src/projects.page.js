import { getSprints } from "./_includes/js/utils/get-sprints.js";

export default function* ({ taxonomy, projects, sprints}) {
   const activeProjects = projects.projects.filter(project => !project.archived)

   for (const project of activeProjects) {
      const phases = taxonomy.phases.map(phase => {
         return {
            label: phase.label,
            slug: phase.value,
            icon: phase.icon,
            sprints: getSprints(sprints, project.slug, phase.value)
         }
      })
      yield {
         title: project.title,
         url: `/${project.slug}/`,
         selected: project.slug == projects.selected,
         slug: project.slug,
         description: project.description,
         layout: 'layouts/project.jsx',
         phases,
      }
   }
}