
const Project = ({ title, description, children }) => {

   return (
      <article>
         <h1>{title}</h1>
         <p>{description}</p>
         {children}
      </article>
   )
}

export default Project;