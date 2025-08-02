/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/', icon: "material-symbols:home" },
  { text: 'Blog', link: '/blog/', icon: "material-symbols:article" },
  { text: 'Tags', link: '/blog/tags/', icon: "material-symbols:label" },
  { text: 'Archives', link: '/blog/archives/', icon: "material-symbols:calendar-month" },
  {
    text: 'Notes', icon: "material-symbols:note",
    items: [
      { text: 'FIT2014', link: '/notes/fit2014/README.md' },
      { text: 'FIT3143', link: '/notes/fit3143/README.md' },]
  },
])

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/zh/', icon: "material-symbols:home" },
  { text: '博客', link: '/zh/blog/', icon: "material-symbols:article" },
  { text: '标签', link: '/zh/blog/tags/', icon: "material-symbols:label" },
  { text: '归档', link: '/zh/blog/archives/', icon: "material-symbols:calendar-month" },
  {
    text: '笔记', icon: "material-symbols:note", 
    items: [
      { text: 'FIT2014', link: '/zh/notes/fit2014/README.md' },
      { text: 'FIT3143', link: '/zh/notes/fit3143/README.md' },
    ]
  },
])

