// Context ============================================
import { DatabaseProvider } from '../../../context/database/index.jsx'

/**
 * @component ContextProviders - Provides context providers.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.children - Component children.
 *
 * @returns {JSX.Element} component - Component JSX.
 */
const ContextProviders = ({ children }) => {
   return (
      <DatabaseProvider>
         { children }
      </DatabaseProvider>
   )
}

export default ContextProviders