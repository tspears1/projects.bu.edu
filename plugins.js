// Plugins =========================================
import googleFonts from "lume/plugins/google_fonts.ts";
import esbuild from "lume/plugins/esbuild.ts";
import icons from "lume/plugins/icons.ts";
import inline from "lume/plugins/inline.ts";

// Data ============================================
import taxonomy from './src/_setup/taxonomy.js'
import projects from './src/_setup/projects.js'
import config from './src/_setup/config.js'

const isProduction = false; // Need to update late with .env vars

export default function () {
   return (site) => {
      site.data('taxonomy', taxonomy)
      site.data('projectsData', projects)
      site.data('org', config)

      site.use(googleFonts({
         cssFile: "./main.css",
         placeholder: "/* google-fonts */",
         fonts: {
            lexend: "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900"
         }
      }));

      site.use(esbuild({
         extensions: [".js"],
         options: {
            jsxDev: !isProduction,
            minify: isProduction,
         }
      }));

      site.use(icons({ folder: "icons"}));
      site.use(inline());

      site.copy('./main.css');
      site.copy('_includes/css', 'css' )
   }
}