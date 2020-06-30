const { fs, path } = require('@vuepress/shared-utils')

module.exports = {
    title: 'CareyShop 文档中心',
    description: 'CareyShop（简称CS）是一套基于ThinkPHP框架开发的高性能开源商城框架系统，秉承极简、极速、极致的开发理念，对内使用面向对象模块化调用，多终端、跨平台采用REST API构架来面向移动网络趋势，可直接对接PC、移动设备、小程序、云部署，构建Android、IOS的APP。',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['script', {}, 'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?e325e60ca4cd358f2b424f5aecb8021a";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();']
    ],
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        ['@vuepress/search', { searchMaxSuggestions: 10 }]
    ],
    themeConfig: {
        logo: '/assets/img/logo@2x.png',
        repo: 'https://github.com/dnyz520',
        repoLabel: 'Github',
        docsRepo: 'dnyz520/careyshop-docs',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '帮助我们改善此页面',
        lastUpdated: '上次更新',
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '开发',
                ariaLabel: 'Language Menu',
                items: [
                    { text: '后端', link: '/guide/' },
                    { text: '后台', link: '/admin/' }
                ]
            },
            {
                text: '接口',
                ariaLabel: 'Language Menu',
                items: [
                    { text: '顾客组', link: '/api/client/' },
                    { text: '管理组', link: '/api/admin/' }
                ]
            },
            {
                text: '词典',
                link: '/dict/'
            },
            {
                text: '记录',
                link: '/blog/'
            },
            /* {
                text: '论坛',
                link: 'https://carey.top'
            }, */
            {
                text: '旧版',
                link: 'https://olddoc.careyshop.cn'
            }
        ],
        sidebar: {
            '/guide/': getGuideSidebar(),
            '/dict/': [''],
            '/api/client/': getClientApiSidebar(),
            '/api/admin/': getAdminApiSidebar()
        }
    }
}

function getAdminApiSidebar() {
    return [
        '',
        'common/',
        'signature/',
        'calling/',
        'batch/',
        'response/',
        'reach/',
        'noun/',
        {
            title: '账号',
            children: [
                {
                    title: '管理组账号',
                    children: getChildren('../api/admin/user/admin', './user/admin/')
                },
                {
                    title: '顾客组账号',
                    children: getChildren('../api/admin/user/user', './user/user/')
                },
                {
                    title: '账号资金',
                    children: getChildren('../api/admin/user/money', './user/money/')
                },
                {
                    title: '账号等级',
                    children: getChildren('../api/admin/user/level', './user/level/')
                },
                {
                    title: '收货地址',
                    children: getChildren('../api/admin/user/address', './user/address/')
                }
            ]
        },
        {
            title: '权限',
            children: [
                {
                    title: '用户组',
                    children: getChildren('../api/admin/authority/group', './authority/group/')
                },
                {
                    title: '权限规则',
                    children: getChildren('../api/admin/authority/rule', './authority/rule/')
                },
                {
                    title: '菜单管理',
                    children: getChildren('../api/admin/authority/menu', './authority/menu/')
                }
            ]
        },
        {
            title: '提现',
            children: [
                {
                    title: '提现管理',
                    children: getChildren('../api/admin/withdraw/withdraw', './withdraw/withdraw/')
                },
                {
                    title: '提现账号',
                    children: getChildren('../api/admin/withdraw/user', './withdraw/user/')
                }
            ]
        },
        {
            title: '文章',
            children: [
                {
                    title: '文章管理',
                    children: getChildren('../api/admin/article/article', './article/article/')
                },
                {
                    title: '文章分类',
                    children: getChildren('../api/admin/article/cat', './article/cat/')
                },
                {
                    title: '专题管理',
                    children: getChildren('../api/admin/article/topic', './article/topic/')
                }
            ]
        },
        {
            title: '问答',
            children: getChildren('../api/admin/ask', './ask/')
        },
        {
            title: '广告',
            children: [
                {
                    title: '广告位置',
                    children: getChildren('../api/admin/ads/position', './ads/position/')
                },
                {
                    title: '广告列表',
                    children: getChildren('../api/admin/ads/ads', './ads/ads/')
                },
                {
                    title: '前端调用',
                    children: getChildren('../api/admin/ads/home', './ads/home/')
                }
            ]
        },
        {
            title: '物流',
            children: [
                {
                    title: '区域管理',
                    children: getChildren('../api/admin/delivery/region', './delivery/region/')
                },
                {
                    title: '快递公司',
                    children: getChildren('../api/admin/delivery/company', './delivery/company/')
                },
                {
                    title: '配送方式',
                    children: getChildren('../api/admin/delivery/delivery', './delivery/delivery/')
                },
                {
                    title: '配送区域',
                    children: getChildren('../api/admin/delivery/area', './delivery/area/')
                },
                {
                    title: '配送轨迹',
                    children: getChildren('../api/admin/delivery/dist', './delivery/dist/')
                }
            ]
        },
        {
            title: '商品',
            children: [
                {
                    title: '商品分类',
                    children: getChildren('../api/admin/goods/category', './goods/category/')
                },
                {
                    title: '商品品牌',
                    children: getChildren('../api/admin/goods/brand', './goods/brand/')
                },
                {
                    title: '商品模型',
                    children: getChildren('../api/admin/goods/type', './goods/type/')
                },
                {
                    title: '商品属性',
                    children: getChildren('../api/admin/goods/attribute', './goods/attribute/')
                },
                {
                    title: '商品规格',
                    children: getChildren('../api/admin/goods/spec', './goods/spec/')
                },
                {
                    title: '商品评价',
                    children: getChildren('../api/admin/goods/comment', './goods/comment/')
                },
                {
                    title: '商品评价回复',
                    children: getChildren('../api/admin/goods/reply', './goods/reply/')
                },
                {
                    title: '商品咨询',
                    children: getChildren('../api/admin/goods/consult', './goods/consult/')
                },
                {
                    title: '商品管理',
                    children: getChildren('../api/admin/goods/goods', './goods/goods/')
                }
            ]
        },
        {
            title: '营销',
            children: [
                {
                    title: '优惠劵',
                    children: getChildren('../api/admin/market/coupon', './market/coupon/')
                },
                {
                    title: '优惠劵发放',
                    children: getChildren('../api/admin/market/give', './market/give/')
                },
                {
                    title: '商品折扣',
                    children: getChildren('../api/admin/market/discount', './market/discount/')
                },
                {
                    title: '订单促销',
                    children: getChildren('../api/admin/market/promotion', './market/promotion/')
                },
                {
                    title: '购物卡',
                    children: getChildren('../api/admin/market/card', './market/card/')
                },
                {
                    title: '购物卡使用',
                    children: getChildren('../api/admin/market/card_use', './market/card_use/')
                }
            ]
        },
        {
            title: '订单',
            children: [
                {
                    title: '订单管理',
                    children: getChildren('../api/admin/order/order', './order/order/')
                },
                {
                    title: '订单退款',
                    children: getChildren('../api/admin/order/refund', './order/refund/')
                }
            ]
        },
        {
            title: '售后',
            children: getChildren('../api/admin/service', './service/')
        },
        {
            title: '支付',
            children: [
                {
                    title: '支付配置',
                    children: getChildren('../api/admin/payment/payment', './payment/payment/')
                },
                {
                    title: '支付日志',
                    children: getChildren('../api/admin/payment/log', './payment/log/')
                }
            ]
        },
        {
            title: '结算',
            children: getChildren('../api/admin/transaction', './transaction/')
        },
        {
            title: '客服',
            children: getChildren('../api/admin/support', './support/')
        },
        {
            title: '辅助',
            children: [
                {
                    title: '二维码',
                    children: getChildren('../api/admin/assist/qrcode', './assist/qrcode/')
                },
                {
                    title: '友情链接',
                    children: getChildren('../api/admin/assist/friendlink', './assist/friendlink/')
                },
                {
                    title: 'API协助接口',
                    children: getChildren('../api/admin/assist/system', './assist/system/')
                }
            ]
        },
        {
            title: '上传',
            children: [
                {
                    title: '资源上传',
                    children: getChildren('../api/admin/upload/upload', './upload/upload/')
                },
                {
                    title: '资源样式',
                    children: getChildren('../api/admin/upload/style', './upload/style/')
                },
                {
                    title: '资源管理',
                    children: getChildren('../api/admin/upload/storage', './upload/storage/')
                }
            ]
        },
        {
            title: '消息',
            children: [
                {
                    title: '通知系统',
                    children: getChildren('../api/admin/message/notice', './message/notice/')
                },
                {
                    title: '通知系统模板',
                    children: getChildren('../api/admin/message/tpl', './message/tpl/')
                },
                {
                    title: '验证码',
                    children: getChildren('../api/admin/message/verification', './message/verification/')
                },
                {
                    title: '消息管理',
                    children: getChildren('../api/admin/message/message', './message/message/')
                }
            ]
        }
    ]
}

function getClientApiSidebar() {
    return [
        '',
        'common/',
        'signature/',
        'calling/',
        'batch/',
        'response/',
        'reach/',
        'noun/',
        {
            title: '账号',
            children: [
                {
                    title: '顾客组账号',
                    children: getChildren('../api/client/user/user', './user/user/')
                },
                {
                    title: '账号资金',
                    children: getChildren('../api/client/user/money', './user/money/')
                },
                {
                    title: '收货地址',
                    children: getChildren('../api/client/user/address', './user/address/')
                }
            ]
        },
        {
            title: '权限',
            children: [
                {
                    title: '菜单管理',
                    children: getChildren('../api/client/authority/menu', './authority/menu/')
                }
            ]
        },
        {
            title: '提现',
            children: [
                {
                    title: '提现管理',
                    children: getChildren('../api/client/withdraw/withdraw', './withdraw/withdraw/')
                },
                {
                    title: '提现账号',
                    children: getChildren('../api/client/withdraw/user', './withdraw/user/')
                }
            ]
        },
        {
            title: '文章',
            children: [
                {
                    title: '文章管理',
                    children: getChildren('../api/client/article/article', './article/article/')
                },
                {
                    title: '文章分类',
                    children: getChildren('../api/client/article/cat', './article/cat/')
                },
                {
                    title: '专题管理',
                    children: getChildren('../api/client/article/topic', './article/topic/')
                }
            ]
        },
        {
            title: '问答',
            children: getChildren('../api/client/ask', './ask/')
        },
        {
            title: '广告',
            children: [
                {
                    title: '广告位置',
                    children: getChildren('../api/client/ads/position', './ads/position/')
                },
                {
                    title: '广告列表',
                    children: getChildren('../api/client/ads/ads', './ads/ads/')
                }
            ]
        },
        {
            title: '物流',
            children: [
                {
                    title: '区域管理',
                    children: getChildren('../api/client/delivery/region', './delivery/region/')
                },
                {
                    title: '快递公司',
                    children: getChildren('../api/client/delivery/company', './delivery/company/')
                },
                {
                    title: '配送方式',
                    children: getChildren('../api/client/delivery/delivery', './delivery/delivery/')
                },
                {
                    title: '配送轨迹',
                    children: getChildren('../api/client/delivery/dist', './delivery/dist/')
                }
            ]
        },
        {
            title: '商品',
            children: [
                {
                    title: '商品分类',
                    children: getChildren('../api/client/goods/category', './goods/category/')
                },
                {
                    title: '商品品牌',
                    children: getChildren('../api/client/goods/brand', './goods/brand/')
                },
                {
                    title: '商品属性',
                    children: getChildren('../api/client/goods/attribute', './goods/attribute/')
                },
                {
                    title: '商品规格',
                    children: getChildren('../api/client/goods/spec', './goods/spec/')
                },
                {
                    title: '商品评价',
                    children: getChildren('../api/client/goods/comment', './goods/comment/')
                },
                {
                    title: '商品评价回复',
                    children: getChildren('../api/client/goods/reply', './goods/reply/')
                },
                {
                    title: '商品咨询',
                    children: getChildren('../api/client/goods/consult', './goods/consult/')
                },
                {
                    title: '商品管理',
                    children: getChildren('../api/client/goods/goods', './goods/goods/')
                }
            ]
        },
        {
            title: '营销',
            children: [
                {
                    title: '优惠劵',
                    children: getChildren('../api/client/market/coupon', './market/coupon/')
                },
                {
                    title: '优惠劵发放',
                    children: getChildren('../api/client/market/give', './market/give/')
                },
                {
                    title: '商品折扣',
                    children: getChildren('../api/client/market/discount', './market/discount/')
                },
                {
                    title: '订单促销',
                    children: getChildren('../api/client/market/promotion', './market/promotion/')
                },
                {
                    title: '购物卡使用',
                    children: getChildren('../api/client/market/card_use', './market/card_use/')
                }
            ]
        },
        {
            title: '订单',
            children: [
                {
                    title: '购物车',
                    children: getChildren('../api/client/order/cart', './order/cart/')
                },
                {
                    title: '订单管理',
                    children: getChildren('../api/client/order/order', './order/order/')
                },
                {
                    title: '订单退款',
                    children: getChildren('../api/client/order/refund', './order/refund/')
                }
            ]
        },
        {
            title: '售后',
            children: getChildren('../api/client/service', './service/')
        },
        {
            title: '支付',
            children: [
                {
                    title: '支付配置',
                    children: getChildren('../api/client/payment/payment', './payment/payment/')
                },
                {
                    title: '支付日志',
                    children: getChildren('../api/client/payment/log', './payment/log/')
                }
            ]
        },
        {
            title: '结算',
            children: getChildren('../api/client/transaction', './transaction/')
        },
        {
            title: '客服',
            children: getChildren('../api/client/support', './support/')
        },
        {
            title: '辅助',
            children: [
                {
                    title: '收藏夹',
                    children: getChildren('../api/client/assist/collect', './assist/collect/')
                },
                {
                    title: '我的足迹',
                    children: getChildren('../api/client/assist/history', './assist/history/')
                },
                {
                    title: '二维码',
                    children: getChildren('../api/client/assist/qrcode', './assist/qrcode/')
                },
                {
                    title: '友情链接',
                    children: getChildren('../api/client/assist/friendlink', './assist/friendlink/')
                },
                {
                    title: 'API协助接口',
                    children: getChildren('../api/client/assist/system', './assist/system/')
                }
            ]
        },
        {
            title: '上传',
            children: [
                {
                    title: '资源上传',
                    children: getChildren('../api/client/upload/upload', './upload/upload/')
                },
                {
                    title: '资源管理',
                    children: getChildren('../api/client/upload/storage', './upload/storage/')
                }
            ]
        },
        {
            title: '消息',
            children: [
                {
                    title: '验证码',
                    children: getChildren('../api/client/message/verification', './message/verification/')
                },
                {
                    title: '消息管理',
                    children: getChildren('../api/client/message/message', './message/message/')
                }
            ]
        },
        {
            title: '配置',
            children: [
                {
                    title: '应用安装包',
                    children: getChildren('../api/client/setting/app', './setting/app/')
                },
                {
                    title: '前台导航栏',
                    children: getChildren('../api/client/setting/navigation', './setting/navigation/')
                }
            ]
        }
    ]
}

function getGuideSidebar() {
    return [
        {
            title: '序言',
            path: '/guide/',
            children: ['white/', 'gray/']
        },
        'build/',
        'download/',
        'tree/',
        {
            title: '二次开发',
            children: ['common/', 'debug/', 'version/', 'controller/']
        },
        'safety/',
        'hijack/',
        'enter/',
        'rewrite/',
        'timing/',
        'constant/',
        'ask/',
        'changelog/',
        'upgrade/'
    ]
}

function getChildren(p, s) {
    const children = fs
    .readdirSync(path.resolve(__dirname, p))
    .map(filename => s + filename.slice(0, -3))
    .sort()

    return children
}
