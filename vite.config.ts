import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import components from 'unplugin-vue-components/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
	server:{
		port: 8888,
		open: true
	},
  plugins: [uni(),  components({
      resolvers: [VarletUIResolver()]
    })],
});
