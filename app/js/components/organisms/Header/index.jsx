import { useEffect } from "react"
import { useDatabase } from '../../../context/database/index.jsx'
import { Horse } from '@phosphor-icons/react/dist/ssr'
/**
 * @component Header - Main application component.
 *
 * @param {Object} props - Component props.
 *
 * @returns {JSX.Element}
 */
const Header = () => {
   const { sprints } = useDatabase()

   useEffect(() => {
      console.log('db', sprints)
   }, [sprints])

   return (
      <header className='site-header'>
         <div className='site-header__container'>
            <h2><strong>ID://PROJECTS - projects.bu.edu</strong></h2>
         </div>
      </header>
   )
}

export default Header