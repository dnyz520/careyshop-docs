module.exports = {
    title: 'CareyShop 文档中心',
    description: 'CareyShop（简称CS）是一套基于ThinkPHP框架开发的高性能开源商城框架系统，秉承极简、极速、极致的开发理念，对内使用面向对象模块化调用，多终端、跨平台采用REST API构架来面向移动网络趋势，可直接对接PC、移动设备、小程序、云部署，构建Android、IOS的APP。',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['script', {}, 'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?e325e60ca4cd358f2b424f5aecb8021a";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();']
    ],
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress'
    ],
    themeConfig: {
        logo: '/image/logo@2x.png',
        repo: 'https://github.com/dnyz520',
        repoLabel: 'Github',
        docsRepo: 'dnyz520/careyshop-docs',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '帮助我们改善此页面',
        lastUpdated: '上次更新',
        nav: [
            {
                text: '主站',
                link: 'https://www.careyshop.cn'
            },
            {
                text: '开发手册',
                ariaLabel: 'Language Menu',
                items: [
                    { text: '后端', link: '/guide/' },
                    { text: '后台', link: '/admin/' }
                ]
            },
            {
                text: 'API接口',
                ariaLabel: 'Language Menu',
                items: [
                    { text: '客户组', link: '/api/client/' },
                    { text: '管理组', link: '/api/admin/' }
                ]
            },
            {
                text: '数据词典',
                link: '/data_dict/'
            },
            {
                text: '论坛',
                link: 'https://carey.top'
            },
            {
                text: '旧版',
                link: 'https://olddoc.careyshop.cn'
            }
        ],
        sidebar: {
            '/guide/': getGuideSidebar()
        }
    }
}

function getGuideSidebar() {
    return [
        {
            title: '序言',
            path: '/guide/',
            children: ['white', 'gray']
        },
        'build',
        'download',
        'tree',
        {
            title: '二次开发',
            children: ['common', 'debug', 'version', 'controller']
        },
        'safety',
        'hijack',
        'enter',
        'rewrite',
        'timing',
        'constant',
        'ask',
        'changelog',
        'upgrade'
    ]
}