// Lume ============================================
import lume from "lume/mod.ts";
import plugins from "./plugins.js";

const site = lume();

site.use(plugins());

export default site;
