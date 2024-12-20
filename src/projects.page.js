import { getSprints } from "./_includes/js/utils/get-sprints.js";

export default function* ({ taxonomy, projectsData: projects, projects: data}) {
   const { phase: phases } = taxonomy
   const activeProjects = projects.projects.filter(project => !project.archived)

   for (const project of activeProjects) {
      yield {
         title: project.title,
         url: `/${project.slug}/`,
         selected: project.slug == projects.selected,
         slug: project.slug,
         description: project.description,
         layout: 'layouts/project.vto',
      }

      for (const phase of phases) {
         const sprints = getSprints(data, project.slug, phase.value)
         yield {
            title: phase.label,
            project: {
               title: project.title,
               slug: project.slug,
               selected: project.slug == projects.selected,
               description: project.description,
            },
            url: `/${project.slug}/${phase.value}/`,
            slug: phase.value,
            layout: 'layouts/phase.vto',
            sprints,
         }
      }
   }
}