import projectsData from '../../_setup/projects.js'
import taxonomyData from '../../_setup/taxonomy.js'

const Sidebar = ({ project, ui }) => {
   return (
      <aside className='site-sidebar'>
         <h3>Projects</h3>
         <ul>
            {projectsData.projects.filter(project => !project.archived).map(pr => (
               <li className='site-sidebar__project' key={pr.slug}>
                  {pr.slug == project && (
                     <span className='site-sidebar__project__title'>{pr.title}</span>
                  )}
                  {pr.slug != project && (
                     <a href={`/${pr.slug}/`}>{pr.title}</a>
                  )}
               </li>
            ))}
         </ul>
         <h3>Phases</h3>
         <ul>
            {taxonomyData.phases.map((ph, index) => (
               <li className='site-sidebar__phase' key={ph.value}>
                  <ui.RadioButton
                     label={ph.label}
                     group='phase'
                     value={ph.value}
                     checked={index == 0}
                     classes='site-sidebar__phase__button'
                     icon={[ph.icon, 'caret-right']}
                     tooltip='right'
                     attrs={{ 'data-phase': ph.value }}
                  />
               </li>
            ))}
         </ul>
      </aside>
   )
}

export default Sidebar