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
  { text: 'Notes', link: '/notes/', icon: "material-symbols:note" },
])

export const zhCNNavbar = defineNavbarConfig([
  { text: '首页', link: '/zh-CN/', icon: "material-symbols:home" },
  { text: '博客', link: '/zh-CN/blog/', icon: "material-symbols:article" },
  { text: '标签', link: '/zh-CN/blog/tags/', icon: "material-symbols:label" },
  { text: '归档', link: '/zh-CN/blog/archives/', icon: "material-symbols:calendar-month" },
  { text: '笔记', link: '/zh-CN/notes/', icon: "material-symbols:note" },
])

export const zhTWNavbar = defineNavbarConfig([
  { text: '首頁', link: '/zh-TW/', icon: "material-symbols:home" },
  { text: '網誌', link: '/zh-TW/blog/', icon: "material-symbols:article" },
  { text: '標籤', link: '/zh-TW/blog/tags/', icon: "material-symbols:label" },
  { text: '歸檔', link: '/zh-TW/blog/archives/', icon: "material-symbols:calendar-month" },
  { text: '筆記', link: '/zh-TW/notes/', icon: "material-symbols:note" },
])

