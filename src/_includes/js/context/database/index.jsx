// Preact
import { useEffect, useContext } from "npm:preact@10.25.1/hooks"
import { createContext } from "npm:preact@10.25.1"
import { signal } from 'npm:@preact/signals-core'

// Create context.
const DatabaseContext = createContext(null)

/**
 * Hook to provide database context.
 *
 * @returns {Object} database - Database context.
 */
const useDatabase = () => useContext(DatabaseContext)

/**
 * @component DatabaseProvider - Provides database context.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.children - Component children.
 *
 * @returns {JSX.Element} component - Component JSX.
 */
const DatabaseProvider = ({ children }) => {
   const db = signal(null)

   useEffect(async () => {
      db.value = await fetch('/data.json').then(res => res.json())
   }, [])

   return (
      <DatabaseContext.Provider value={db}>
         { children }
      </DatabaseContext.Provider>
   )
}

export { DatabaseProvider, useDatabase }