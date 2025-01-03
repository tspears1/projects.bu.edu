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
    <DatabaseProvider>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </DatabaseProvider>
  );
};

export default ContextProviders;
