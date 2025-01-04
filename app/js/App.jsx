// Components ============================================
import ContextProviders from "@components/organisms/ContextProviders/ContextProviders.jsx";
import Header from "@components/organisms/Header/Header.jsx";
import { AppSidebar } from "@components/organisms/AppSidebar/AppSidebar.jsx";
import { SidebarInset } from "@components/organisms/Sidebar/Sidebar.jsx";

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
        <AppSidebar />
        <SidebarInset>
          <div className="site-content">
            <Header />
            <main className="site-main">
              <div>Main</div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </ContextProviders>
  );
};

export default App;
