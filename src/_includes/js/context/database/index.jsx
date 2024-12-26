// Preact
import { useEffect, useContext, useState } from "npm:preact@10.25.1/hooks"
import { createContext } from "npm:preact@10.25.1"
import sprints from "../../../../../_cms/collections/sprint/index.js";

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
   const [database, setDatabase] = useState({})

   useEffect(async () => {
      const _db = await fetch('/data.json').then(res => res.json())
      setDatabase(_db)
   }, [])

   return (
      <DatabaseContext.Provider value={{
         sprints: database.sprints,
         projects: database.projects,
         taxonomy: database.taxonomy,
         org: database.org
      }}>
         { children }
      </DatabaseContext.Provider>
   )
}

export { DatabaseProvider, useDatabase }