// import './assets/main.css'
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/textfield/filled-text-field.js';
import '@fontsource/lato/400.css'
import '@fortawesome/fontawesome-pro'
import '@fortawesome/fontawesome-pro/css/all.css'
import '@/assets/theme.css';
import { createApp } from 'vue'

import App from './App.vue'

createApp(App).mount('#app')

// export default meta = {
//     parameters: {
//         slots: {
//             default: {
//                 description: 'Default slot',
//                 template: `<p>{{ args.default }}</p>`
//             },
//         },
//     }
// }