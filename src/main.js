import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/button/text-button.js'
import '@material/web/button/elevated-button.js'
import '@material/web/button/filled-tonal-button.js'
import '@material/web/iconbutton/icon-button.js'
import '@material/web/iconbutton/filled-icon-button.js'
import '@material/web/iconbutton/outlined-icon-button.js'
import '@material/web/iconbutton/filled-tonal-icon-button.js'
import '@material/web/fab/fab.js'

import '@material/web/textfield/filled-text-field.js'
import '@material/web/textfield/outlined-text-field.js'

import '@material/web/checkbox/checkbox.js'
import '@material/web/radio/radio.js'

import '@material/web/chips/input-chip.js'
import '@material/web/chips/assist-chip.js'
import '@material/web/chips/filter-chip.js'
import '@material/web/chips/suggestion-chip.js'

import '@material/web/menu/menu.js'
import '@material/web/menu/menu-item.js'

import '@material/web/select/outlined-select.js'
import '@material/web/select/filled-select.js'

import '@fontsource/lato/300.css'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import '@fortawesome/fontawesome-pro'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-pro/css/all.css'
import '../dist/theme.css'
import '../dist/style.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { createApp } from 'vue'
import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            fa
        },
    },
    theme: {
        defaultTheme: 'ioVuetifyTheme',
        themes: {
            ioVuetifyTheme: {
                dark: false,
                colors: {
                    background: '#FFFFFF',
                    surface: '#FFFFFF', 
                    primary: 'var(--md-sys-color-primary)',
                    'primary-darken-1': '#3700B3',
                    secondary: '#03DAC6',
                    'secondary-darken-1': '#018786',
                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00'
                }
            }
        }
    }
})
// --- VUETIFY - END ---



createApp(App).use(vuetify).mount('#app')

