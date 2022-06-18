const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        "./assets/*.js",
        "./assets/**/*.js",
        "./partials/*.hbs",
        "./partials/**/*.hbs",
        "./*.hbs"
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'sans': ['Inter', 'sans-serif'],
            'serif': ['Lora', 'serif']
        },
        extend: {
            gridTemplateColumns: {
                'mobile': '[full-start] minmax(20px,auto) [wide-start] minmax(auto,240px) [main-start] min(720px,calc(100% - 40px)) [main-end] minmax(auto,240px) [wide-end] minmax(20px,auto) [full-end]',
                'desktop': '[full-start] minmax(32px,auto) [wide-start] minmax(auto,240px) [main-start] min(720px,calc(100% - 64px)) [main-end] minmax(auto,240px) [wide-end] minmax(32px,auto) [full-end]'
            },
            gridColumnStart: {
                'main': 'main-start',
                'wide': 'wide-start',
                'full': 'full-start'
            },
            gridColumnEnd: {
                'main': 'main-end',
                'wide': 'wide-end',
                'full': 'full-end'
            },
            padding: {
                'custom-60': '60%',
                'custom-70': '70%'
            }
        },
    },
    plugins: [
        plugin(function ({ addUtilities, addBase }) {
            addUtilities({
                '.scrollbar-hide': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                }
            }),
            addBase({
                '@font-face': {
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                    fontWeight: '400',
                    src: 'url("../fonts/inter-all-400-normal.woff") format("woff")'
                }
            }),
            addBase({
                '@font-face': {
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                    fontWeight: '500',
                    src: 'url("../fonts/inter-all-500-normal.woff") format("woff")'
                }
            }),
            addBase({
                '@font-face': {
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                    fontWeight: '600',
                    src: 'url("../fonts/inter-all-600-normal.woff") format("woff")'
                }
            }),
            addBase({
                '@font-face': {
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                    fontWeight: '700',
                    src: 'url("../fonts/inter-all-700-normal.woff") format("woff")'
                }
            }),
            addBase({
                '@font-face': {
                    fontFamily: 'Lora',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                    fontWeight: '400',
                    src: 'url("../fonts/lora-all-400-normal.woff") format("woff")'
                }
            }),
            addBase({
                '@font-face': {
                    fontFamily: 'Lora',
                    fontStyle: 'italic',
                    fontDisplay: 'swap',
                    fontWeight: '400',
                    src: 'url("../fonts/lora-all-400-italic.woff") format("woff")'
                }
            }),
            addBase({
                '@font-face': {
                    fontFamily: 'Lora',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                    fontWeight: '700',
                    src: 'url("../fonts/lora-all-700-normal.woff") format("woff")'
                }
            }),
            addBase({
                '@font-face': {
                    fontFamily: 'Lora',
                    fontStyle: 'italic',
                    fontDisplay: 'swap',
                    fontWeight: '700',
                    src: 'url("../fonts/lora-all-700-italic.woff") format("woff")'
                }
            }),
            addBase({
                '@font-face': {
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                    fontWeight: '400',
                    src: 'url("../fonts/inter-all-400-normal.woff") format("woff")'
                }
            }),
            addBase({
                '@font-face': {
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                    fontWeight: '700',
                    src: 'url("../fonts/inter-all-700-normal.woff") format("woff")'
                }
            })
        })
    ],
    safeList: []
}