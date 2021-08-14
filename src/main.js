const { createApp } = require('vue')
import App from "./App.vue"
import BaseInput from "./components/form/BaseInput.vue"
import BaseSelect from "./components/form/BaseSelect.vue"

createApp(App)
  .component('BaseInput', BaseInput)
  .component('BaseSelect', BaseSelect)
  .mount("#app")
