import { useEffect } from "npm:preact@10.25.1/hooks"
import { useDatabase } from '@context/database/index.jsx'

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
            <h2>The Header</h2>
         </div>
      </header>
   )
}

export default Header