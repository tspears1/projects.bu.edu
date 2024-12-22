import Project from "../../_components/Project.jsx";
import taxonomy from "../../_taxonomy/index.js";
import sprint from '../../_data/projects/website-redesign-2024/strategy/2024-12-19-sprint-1.json' with { type: 'json'}

const App = () => {
   const { phase: phases } = taxonomy
   console.log({sprint})
   return (
      <>
         <h1>App</h1>
         <Project />
      </>
   )
}

export default App;