// Components ============================================
import ContextProviders from "@components/organisms/ContextProviders/ContextProviders.jsx";
import Header from "@components/organisms/Header/Header.jsx";

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
        <div>Sidebar</div>
        <div className="site-content">
          <Header />
          <main className="site-main">
            <div>Main</div>
          </main>
        </div>
      </div>
    </ContextProviders>
  );
};

export default App;
