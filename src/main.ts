import { createSSRApp } from "vue";
import App from "./App.vue";
// import Varlet from '@varlet/ui'
// import '@varlet/ui/es/style.js'
export function createApp() {
  const app = createSSRApp(App);
  // app.use(Varlet)
  return {
    app,
  };
}
