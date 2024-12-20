// Lume ============================================
import lume from "lume/mod.ts";
import plugins from "./plugins.js";

const site = lume({
   src: "src",
   components: {
      variable: "ui"
   }
});

site.use(plugins());

export default site;