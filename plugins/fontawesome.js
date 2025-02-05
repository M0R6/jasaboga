// For Nuxt 2
import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faInstagram, faWhatsapp, faSoundcloud, faSpotify, faYoutube, faTwitch, faDiscord, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas, faWhatsapp, faSoundcloud, faSpotify, faInstagram, faYoutube, faTwitch, faDiscord, faXTwitter)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Modify nuxt.config.js adding to the `css` and `plugins` sections.
css: [
'@fortawesome/fontawesome-svg-core/styles.css'
]

plugins: [
'~/plugins/fontawesome.js'
]