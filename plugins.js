// Plugins =========================================
import googleFonts from "lume/plugins/google_fonts.ts";
import esbuild from "lume/plugins/esbuild.ts";
import icons from "lume/plugins/icons.ts";
import inline from "lume/plugins/inline.ts";
import jsx from "lume/plugins/jsx.ts";

// Data ============================================
import taxonomy from './src/_setup/taxonomy.js'
import projects from './src/_setup/projects.js'
import config from './src/_setup/config.js'

const isProduction = false; // Need to update late with .env vars

export default function () {
   return (site) => {
      site.data('taxonomy', taxonomy)
      site.data('projects', projects)
      site.data('org', config)

      site.use(googleFonts({
         cssFile: "./main.css",
         placeholder: "/* google-fonts */",
         fonts: {
            mona: "https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
         }
      }));

      site.use(esbuild({
         extensions: [".js", ".jsx"],
         options: {
            jsxDev: !isProduction,
            minify: isProduction,
         },
         esm: {
            cjsExports: {
               'valtio/vanilla': ['snapshot', 'subscribe', 'proxy', 'ref'],
               'valtio/vanilla/utils': ['subscribeKey', 'watch', 'devtools', 'derive', 'proxyWithHistory', 'proxySet', 'proxyMap']
            }
         }
      }));

      site.use(icons({ folder: "icons"}));
      site.use(inline());
      site.use(jsx({
         pageSubExtension: ".page",
      }));

      site.copy('./main.css');
      site.copy('_includes/css', 'css' )
   }
}