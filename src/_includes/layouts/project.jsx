export const layout = 'layouts/global.jsx'

const projectLayout = ({ title, slug, description, selected, sprints, ui }) => {
   return (
      <div className='site-wrapper'>
         <ui.Sidebar project={slug}/>
         <div className='site-content'>
            <ui.Header project={slug} />

            <div className='site-main'>
               <h1>This is a Project</h1>

               <ul>
                  <li>Project: {title}</li>
                  <li>Slug: {slug}</li>
                  <li>Description: {description}</li>
                  <li>Selected: {selected}</li>
               </ul>
               {/* {sprints.filter(sprint => sprint.assetList.length).map(sprint => (
                  <div key={sprint.title}>
                     <h2>{sprint.title}</h2>
                     <p>{new Date(sprint.date).toDateString()}</p>
                     <p>{sprint.project}</p>

                     {sprint.assetList.map(asset => (
                        <div key={asset.title}>
                           <h3>{asset.title}</h3>
                           <p>{asset.description}</p>
                           <p>{new Date(asset.lastModified).toDateString()}</p>
                           <p>{asset.fileUrl}</p>
                           <p>{asset.status}</p>
                        </div>
                     ))}
                  </div>
               ))} */}
            </div>
         </div>
      </div>
   )
}

export default projectLayout