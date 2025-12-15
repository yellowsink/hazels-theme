// this is for shelter hot reload, and not anything else.
// to get hot theme reload on shelter for this, run `lune dev` in this folder and enable the dev plugin in shelter
// make sure you disable any built dist of the theme first or you'll get it twice injected!

import css from "./hazels-theme.theme.sass";

shelter.plugin.scoped.ui.injectCss(css);
