// Components ============================================
import ContextProviders from "@components/organisms/ContextProviders/ContextProviders.jsx";
import Header from "@components/organisms/Header/Header.jsx";
import { AppSidebar } from "@components/organisms/AppSidebar/AppSidebar.jsx";
import { SidebarInset } from "./components/ui/Sidebar/Sidebar.jsx";
import { Brand } from "@components/atoms/Brand/Brand.jsx";

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
        <Brand className='site-brand' />
        <div className="site-inner">
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
      </div>
    </ContextProviders>
  );
};

export default App;
