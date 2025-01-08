// React
import React, { createContext, useContext, useEffect, useState } from "react";

// Create context.
const DatabaseContext = createContext(null);

/**
 * Hook to provide database context.
 *
 * @returns {Object} database - Database context.
 */
const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error("useDatabase must be used within a DatabaseProvider.");
  }
  return context;
};

/**
 * @component DatabaseProvider - Provides database context.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.children - Component children.
 *
 * @returns {JSX.Element} component - Component JSX.
 */
const DatabaseProvider = ({ children }) => {
  const [database, setDatabase] = useState(null);

  useEffect(() => {
    fetch("/data.json").then((res) => res.json()).then((data) => {
      setDatabase(data);
    });
  }, []);

  return (
    <DatabaseContext.Provider
      value={{
        sprints: database?.sprints,
        projects: database?.projects,
        taxonomy: database?.taxonomy,
        org: database?.org,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export { DatabaseProvider, useDatabase };
