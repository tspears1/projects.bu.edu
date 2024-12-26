// Components ============================================
import ContextProviders from '@components/organisms/ContextProviders/index.jsx'

/**
 * @component App - Main application component.
 *
 * @param {Object} props - Component props.
 *
 * @returns {JSX.Element}
 */
const App = () => {

   return (
      <ContextProviders>
         <h1>Hello World</h1>
      </ContextProviders>
   )
}

export default App