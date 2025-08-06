<template>
  <FriendsPage 
    :texts="chineseTexts"
    :myInfo="myInfo"
  />
</template>

<script setup>
import FriendsPage from '../../../.vuepress/theme/template/FriendsPage.vue'

const myInfo = {
  name: 'WARREN',
  website: 'https://yunfenglong.github.io/wan-s-blog/',
  description: '始於夢想，成於實幹。',
  avatar: 'https://yunfenglong.github.io/wan-s-blog/avatar.jpeg',
  siteShot: '"將於今年秋季提供"'
}

const chineseTexts = {
  friendsTitle: '我嘅小伙伴們',
  connectionTitle: '歡迎交換友鏈！',
  myInfoTitle: '我嘅信息',
  exchangeTitle: '友鏈交換',
  rulesTitle: '一些小規則',
  introText: '非常歡迎和各位創作者朋友們交換友鏈！如果你希望交換鏈接，請參考以下簡單步驟。',
  methodsText: '你可以通過以下幾種方式添加你嘅博客：',
  requirementText: '無論你選擇哪種方式，都請包含以下信息。',
  checkText: '請務必確認你嘅網站可以正常訪問！',
  labels: {
    name: '名稱',
    website: '網站',
    description: '描述',
    avatar: '頭像',
    siteShot: '站點截圖'
  },
  methods: {
    simple: {
      title: '简单方式',
      description: '将你的信息发送到我的邮箱'
    },
    git: {
      title: '技術方式 (Git)',
      description: '如果你熟悉 GitHub，也可以：',
      fork: 'Fork 本站倉庫',
      forkDesc: '，添加你嘅信息，然後提交一個 Pull Request。',
      issue: '提交一個 Issue',
      issueDesc: ' 並附上你嘅鏈接信息。'
    }
  },
  template: {
    name: 'name: 你嘅暱稱',
    link: 'link: 你嘅網站地址',
    desc: 'desc: 一句簡潔、有趣嘅描述。',
    avatar: 'avatar: 你嘅頭像鏈接。'
  },
  rules: [
    {
      title: '互惠互利',
      description: '希望你申請前能將我嘅鏈接添加到你嘅網站上。讓我哋建立雙向嘅連接！'
    },
    {
      title: '僅限個人原創博客',
      description: '呢度係為分享自己故事同項目嘅創作者準備嘅空間。我唔會添加論壇、內容聚合站或文檔類網站。'
    },
    {
      title: '保持活躍與安全',
      description: '你嘅博客需要定期更新，使用 HTTPS 協議加載，並且冇有干擾性嘅廣告。'
    },
    {
      title: '內容合法合規',
      description: '所有內容必須遵守相關法律法規。'
    },
    {
      title: '維護',
      description: '對於長期無法訪問或違反上述規則嘅鏈接，我將唔再另行通知並直接移除，以保持呢度嘅整潔。'
    },
    {
      title: '最終決定權',
      description: '為咗保證本站友鏈嘅質量，我保留拒絕任何申請嘅權利。'
    }
  ]
}
</script>