// Lume ============================================
import lume from "lume/mod.ts";
import plugins from "./plugins.js";

const site = lume({
   watcher: {
      ignore: [
         "_build",
         (path) => path.includes("vite.config.js")
      ],
   }
});

site.use(plugins());

export default site;
