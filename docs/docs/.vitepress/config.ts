export default {
    title: 'SOAP CELEBS',
    description: 'Just playing around.',
    logo: '/logo.svg',
    themeConfig: {
        nav: [
            { text: 'Docs', link: '/endpoints/getAllCelebs' },
            { text: 'Support Us', link: '/supportUs' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/YoavDn/canvas-party' },
            // You can also add custom icons by passing SVG as string:
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
                },
                link: '...',
            },
        ],
        sidebar: [
            {
                text: 'Endpoints',
                items: [
                    { text: 'All Soap Celebs', link: '/endpoints/getAllCelebs' },
                    { text: 'Random Celeb', link: '/endpoints/randomCeleb' },
                    { text: 'By Gender', link: '/endpoints/byGender' }

                ]
            }
        ],
        footer: {
            message: 'Made with ❤️ by YoavDn.'
        }
    }
}