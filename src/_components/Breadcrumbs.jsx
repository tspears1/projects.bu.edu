const Breadcrumbs = ({ project, phase }) => {
   if (!project) return null

   return (
      <sl-breadcrumb>
         <sl-breadcrumb-item href={`/${project.slug}/`}>{project.title}</sl-breadcrumb-item>
         {phase && (
            <sl-breadcrumb-item>{phase.label}</sl-breadcrumb-item>
         )}
      </sl-breadcrumb>
   )
}

export default Breadcrumbs
