const getSprints = (projects, projectSlug, phase) => {
   if (!projects) return []
   if (!projects[projectSlug]) return []
   if (!projects[projectSlug][phase]) return []

   return Object.values(projects[projectSlug][phase]) || []
}

export { getSprints }