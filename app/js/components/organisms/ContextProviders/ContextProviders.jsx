// React ====================================
import React from "react";

// Context ============================================
import { DatabaseProvider } from "@context/database/database-context.jsx";
import { SidebarProvider } from "@context/sidebar/sidebar-context.jsx";

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
    <SidebarProvider>
      <DatabaseProvider>
        {children}
      </DatabaseProvider>
    </SidebarProvider>
  );
};

ContextProviders.displayName = "ContextProviders";

export default ContextProviders;
