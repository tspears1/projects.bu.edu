export const layout = 'layouts/global.jsx'

const projectLayout = ({ title, slug, description, selected, projectSprints, ui }) => {
   return (
      <div className='site-wrapper'>
         <ui.Sidebar project={slug}/>
         <div className='site-content'>
            <ui.Header project={slug} />
            <div className='site-main' data-project={slug}>
               {/* {Object.entries(projectSprints).map(([key, value], index) => (
                  <ul className='project-sprints' data-sprints={key} key={`${key}-${index}`}>
                     {value.map((sprint, index) => (
                           <li
                              className='project-sprints__item'
                              key={`sprint-${index}`}
                              data-index={index}
                              data-sprint-date={sprint.date}
                           >
                              <ui.Sprint sprint={sprint} />
                           </li>
                     ))}
                  </ul>
               ))} */}
            </div>
         </div>
      </div>
   )
}

export default projectLayout