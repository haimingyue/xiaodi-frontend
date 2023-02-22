import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    experimental: {
        reactivityTransform: true
    },
    vite: {
        plugins: [
            Components({
                resolvers: [AntDesignVueResolver()]
            }),
        ]
    }
})
