import Button from "../_components/Button.jsx";
import taxonomy from "../_taxonomy/index.js";


const Project = ({ data }) => {
   const { phase: phases } = taxonomy

   return (
      <article>
         <h1>Projects</h1>
         <Button>Click Me</Button>
      </article>
   )
}

export default Project;