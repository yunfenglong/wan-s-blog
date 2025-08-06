import { defineClientConfig } from 'vuepress/client'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

import './theme/styles/custom.css'
import './theme/styles/index.css'
import './theme/styles/friends.css'
import Custom from './theme/components/Custom.vue'
import Custom_zh_CN from '../zh-CN/theme/components/Custom.vue'
import Custom_zh_TW from '../zh-TW/theme/components/Custom.vue'
import FriendsPage from './theme/components/FriendsPage.vue'
import FriendsPage_zh_CN from '../zh-CN/theme/components/FriendsPage.vue'
import FriendsPage_zh_TW from '../zh-TW/theme/components/FriendsPage.vue'

// import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    app.component('Custom', Custom)
    app.component('Custom-zhCN', Custom_zh_CN)
    app.component('Custom-zhTW', Custom_zh_TW)

    app.component('FriendsPage', FriendsPage)
    app.component('FriendsPage-zhCN', FriendsPage_zh_CN)
    app.component('FriendsPage-zhTW', FriendsPage_zh_TW)

  },
})
