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
  description: '生命不息，折腾不止的技术猿。',
  avatar: 'https://yunfenglong.github.io/wan-s-blog/avatar.jpeg',
  siteShot: '"将于今年秋季提供"'
}

const chineseTexts = {
  friendsTitle: '我的小伙伴们',
  connectionTitle: '欢迎交换友链！',
  myInfoTitle: '我的信息',
  exchangeTitle: '友链交换',
  rulesTitle: '一些小规则',
  introText: '非常欢迎和各位创作者朋友们交换友链！如果你希望交换链接，请参考以下简单步骤。',
  methodsText: '你可以通过以下几种方式添加你的博客：',
  requirementText: '无论你选择哪种方式，都请包含以下信息。',
  checkText: '请务必确认你的网站可以正常访问！',
  labels: {
    name: '名称',
    website: '网站',
    description: '描述',
    avatar: '头像',
    siteShot: '站点截图'
  },
  methods: {
    simple: {
      title: '简单方式',
      description: '将你的信息发送到我的邮箱'
    },
    git: {
      title: '技术方式 (Git)',
      description: '如果你熟悉 GitHub，也可以：',
      fork: 'Fork 本站仓库',
      forkDesc: '，添加你的信息，然后提交一个 Pull Request。',
      issue: '提交一个 Issue',
      issueDesc: ' 并附上你的链接信息。'
    }
  },
  template: {
    name: 'name: 你的昵称',
    link: 'link: 你的网站地址',
    desc: 'desc: 一句简洁、有趣的描述。',
    avatar: 'avatar: 你的头像链接。'
  },
  rules: [
    {
      title: '互惠互利',
      description: '希望你在申请前能将我的链接添加到你的网站上。让我们建立双向的连接！'
    },
    {
      title: '仅限个人原创博客',
      description: '这里是为分享自己故事和项目的创作者准备的空间。我不会添加论坛、内容聚合站或文档类网站。'
    },
    {
      title: '保持活跃与安全',
      description: '你的博客需要定期更新，使用 HTTPS 协议加载，并且没有干扰性的广告。'
    },
    {
      title: '内容合法合规',
      description: '所有内容必须遵守相关法律法规。'
    },
    {
      title: '维护',
      description: '对于长期无法访问或违反上述规则的链接，我将不再另行通知并直接移除，以保持这里的整洁。'
    },
    {
      title: '最终决定权',
      description: '为了保证本站友链的质量，我保留拒绝任何申请的权利。'
    }
  ]
}
</script>