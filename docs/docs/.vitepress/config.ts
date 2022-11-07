export default {
    title: 'SOAP CELEBS',
    description: 'Just playing around.',
    head: [['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]],
    themeConfig: {
        logo: { dark: '/icon.svg', light: '/icon.svg' },
        nav: [
            { text: 'Docs', link: '/endpoints/getAllCelebs' },
            { text: 'Support Us', link: '/supportUs' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/YoavDn/soap-celebs-api' },
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
                ],
            },
            {
                text: 'More',
                items: [
                    { text: "List of Celebs", link: '/celebsList' },
                    { text: 'Buy me Soap', link: '/supportUs' },
                ]
            },
        ],
        footer: {
            message: 'Made with ❤️ by YoavDn.'
        }
    }
}