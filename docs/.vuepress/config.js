/*
 * @Author: your name
 * @Date: 2020-11-15 18:06:57
 * @LastEditTime: 2020-11-15 20:09:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepressBlog/docs/.vuepress/public/config.js
 */
module.exports = {
    title: 'yaooooooo',
    description: ' ',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        // displayAllHeaders: true, // 默认值：false
        nav: [ // 导航栏配置
            { text: 'hello', link: '/' },
            { text: 'gouzi', link: '/aaa/' },
            {
                text: 'about', items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            },
        ],
        sidebar: {

            '/': [
                '',        /* / */
                'aaa', /* /contact.html */
                'page-a'    /* /about.html */
            ]
        },
        // sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};
