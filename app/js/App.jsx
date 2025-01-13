// Components ============================================
import ContextProviders from "@components/organisms/ContextProviders/ContextProviders.jsx";
import { Toolbar } from "./components/organisms/Toolbar/Toolbar.jsx";
import { AppSidebar } from "@components/organisms/AppSidebar/AppSidebar.jsx";
import { SidebarInset } from "./components/ui/Sidebar/Sidebar.jsx";
import { Brand } from "@components/atoms/Brand/Brand.jsx";
import { ThemeToggle } from "@components/ui/ThemeToggle/ThemeToggle.jsx";

// Hooks ================================================
import { useElementSize } from "@hooks/use-resize-observer.jsx";

/**
 * @component App - Main application component.
 *
 * @param {Object} props - Component props.
 *
 * @returns {JSX.Element}
 */
const App = () => {

  const { ref: headerRef, offsetHeight: height } = useElementSize({ box: 'border-box' });

  return (
    <ContextProviders>
      <div className="site-wrapper" style={{ "--site-header-block-size": `${height}px` }}>
        <div className="site-header" ref={headerRef}>
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

App.displayName = "App";

export default App;
