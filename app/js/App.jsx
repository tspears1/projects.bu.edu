// Components ============================================
import ContextProviders from "@components/organisms/ContextProviders/ContextProviders.jsx";
import { Toolbar } from "./components/organisms/Toolbar/Toolbar.jsx";
import { AppSidebar } from "@components/organisms/AppSidebar/AppSidebar.jsx";
import { SidebarInset } from "./components/ui/Sidebar/Sidebar.jsx";
import { Brand } from "@components/atoms/Brand/Brand.jsx";
import { ThemeToggle } from "@components/ui/ThemeToggle/ThemeToggle.jsx";

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
      <div className="site-wrapper">
        <div className="site-header">
          <Brand className='site-brand' />
          <ThemeToggle />
        </div>
        <div className="site-inner">
          <AppSidebar />
          <SidebarInset>
            <div className="site-content">
              <Toolbar />
              <main className="site-main">
                <div>Main</div>
              </main>
            </div>
          </SidebarInset>
        </div>
      </div>
    </ContextProviders>
  );
};

export default App;
