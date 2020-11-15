/*
 * @Author: your name
 * @Date: 2020-11-15 18:06:57
 * @LastEditTime: 2020-11-15 19:04:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepressBlog/docs/.vuepress/public/config.js
 */
module.exports = {
    title: 'Chen\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        nav: [ // 导航栏配置
            { text: '前端基础', link: '/aaa/' },
            { text: '算法题库', link: '/algorithm/' },
            // { text: '微博', link: 'https://baidu.com' },
            // { text: '微博', link: 'https://baidu.com' },
            // { text: '微博', link: 'https://baidu.com' },
            // { text: '微博', link: 'https://baidu.com' },
            // { text: '微博', link: 'https://baidu.com' },
            // { text: '微博', link: 'https://baidu.com' },
        ],
        sidebar: [
            '/aaa/',
            // '/page-a',
            ['/aaa', 'Explicit link text']
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};
