// Lume ============================================
import lume from "lume/mod.ts";

// Plugins =========================================
import esbuild from "lume/plugins/esbuild.ts";
import jsx from "lume/plugins/jsx_preact.ts";

// Data ============================================
import taxonomy from './_taxonomy/index.js'
import projects from './_projects/index.js'

const site = lume();

const isProduction = false; // Need to update late with .env vars

site.data('taxonomy', taxonomy)
site.data('projectsData', projects)

site.use(jsx({
   pageSubExtension: ".page",
}));

site.use(esbuild({
   extensions: [".jsx", ".js"],
   options: {
      jsxDev: !isProduction,
      minify: isProduction,
   }
}));

export default site;
