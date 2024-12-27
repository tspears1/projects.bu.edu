// React ============================================
import ReactDOMClient from 'npm:react-dom/client'

// Components ============================================
import App from './app/js/App.jsx'

// Render ============================================
const render = () => {
   ReactDOMClient.hydrateRoot(
      document.getElementById('_root'),
      <App />
   )
}

render()