export const layout = 'layouts/global.jsx'

const projectLayout = ({ title, slug, description, selected, projectSprints, ui }) => {
   return (
      <div className='site-wrapper'>
         <ui.Sidebar project={slug}/>
         <div className='site-content'>
            <ui.Header project={slug} />

            <div className='site-main'>
               {Object.entries(projectSprints).map(([key, value], index) => (
                  <ul className='project-sprints' data-phase={key} key={`${key}-${index}`}>
                     {value.map((sprint, index) => (
                           <li className='project-sprints__item' key={`sprint-${index}`}>
                              <ui.Sprint sprint={sprint} />
                           </li>
                     ))}
                  </ul>
               ))}
            </div>
         </div>
      </div>
   )
}

export default projectLayout