import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@unocss/nuxt', '@pinia/nuxt'],
    unocss: {
        uno: true,
        attributify: true,
        shortcuts: [
            { flexc: 'flex items-center justify-center' },
            { flexb: 'flex items-center justify-between' },
            { btn: 'rounded-5px text-center cursor-pointer select-none' },
            { 'text-btn': 'text-center cursor-pointer select-none' },
        ],
        rules: [
            [
                /^truncate-(\d+)$/,
                ([, d]) => ({
                    overflow: 'hidden',
                    display: '-webkit-box',
                    'text-overflow': 'ellipsis',
                    '-webkit-line-clamp': d,
                    '-webkit-box-orient': 'vertical',
                })
            ],
            [
                /^center-text-(\d+)$/,
                ([, d]) => ({
                    height: `${d}px`,
                    'align-items': 'center',
                    'line-height': `${Number(d) -2}px`,
                })
            ],
            [
                /^wh-(\d+)$/,
                ([, d]) => ({
                    width: `${d}px`,
                    height: `${d}px`,
                })
            ]
        ]
    },
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
