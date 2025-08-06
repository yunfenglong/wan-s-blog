---
title: 使用本站作为模版
createTime: 2025/08/03 22:21:50
permalink: /zh-CN/article/u3ylxdo1/
tags: 
  - 集成
  - 部署
---

本博客使用 [vuepress-theme-plume](https://theme-plume.vuejs.press/) 主题，并配备了自定义主页组件。

**在线演示：** [Wan's Blog](https://wanfung.me/) 或 [Wan's Blog](https://yunfenglong.github.io/wan-s-blog/)

本模板提供了一个完全可定制的主页，采用模块化 Vue 组件架构。如果您想使用此博客作为模板，请按照下面的详细设置指南进行操作。

## ✨ 功能特性

- 🎨 **完全可定制**：模块化 Vue 组件架构
- 📱 **响应式设计**：在所有设备上完美运行  
- 🚀 **现代技术栈**：Vue 3, VuePress, TypeScript
- 🎯 **模板就绪**：结构化便于复制
- 🌙 **主题支持**：自动明暗模式切换
- 🎪 **动画背景**：交互式网格与彗星动画
- 🎯 **社交集成**：GitHub、邮箱和自定义链接
- 📊 **图表支持**：ECharts、Chart.js 和 Mermaid 集成

## 🚀 快速开始

### 1. 安装

```bash
# 克隆或分叉此仓库
git clone https://github.com/yunfenglong/wan-s-blog.git
cd wan-s-blog

# 安装依赖
npm install

# 所需依赖已包含在 package.json 中
```

### 2. 配置

本模板采用基于组件的架构，配有集中式样式：

**关键配置文件：**
- `docs/.vuepress/config.ts` - VuePress 和主题配置
- `docs/.vuepress/client.ts` - 组件注册
- `docs/.vuepress/theme/data/friends.json` - 好友/链接数据
- `docs/.vuepress/theme/styles/` - 自定义 CSS 样式

### 3. 基本设置

1. **在 `docs/README.md` 中配置主页：**
```markdown
---
pageLayout: home
externalLinkIcon: false
config:
    - type: Custom
---
```

2. **组件已在 `docs/.vuepress/client.ts` 中注册：**
```typescript
import Custom from './theme/components/Custom.vue'
import FriendsPage from './theme/components/FriendsPage.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Custom', Custom)
    app.component('FriendsPage', FriendsPage)
  },
})
```

## 🎨 定制指南

### 个人信息

直接编辑 `AboutMeName.vue` 组件或创建您自己的版本：

```vue
<!-- 在 docs/.vuepress/theme/components/AboutMeName.vue 中 -->
<template>
  <div class="about-me-card-bg">
    <h1>您的名字</h1>
    <p>嘿，很高兴认识你！👋</p>
    <p>您的精彩标语在这里。</p>
  </div>
</template>
```

### 技能与工具

自定义 `AboutMeSkill.vue` 组件：

```vue
<!-- 使用 Iconify 图标添加您的技能 -->
<div class="skill-item">
  <icon name="logos:vue" />
  <span>Vue</span>
</div>
```

### 社交链接

在 `Custom.vue` 中更新社交链接：

```vue
<div class="head-social">
  <a href="https://github.com/yourusername" target="_blank">
    <icon name="grommet-icons:github" />
  </a>
  <a href="mailto:your.email@example.com" target="_blank">
    <icon name="streamline-flex:mail-send-email-message-circle-solid" />
  </a>
</div>
```

### 好友与链接

编辑 `docs/.vuepress/theme/data/friends.json`：

```json
[
  {
    "name": "好友姓名",
    "link": "https://friend-website.com", 
    "avatar": "https://friend-website.com/avatar.png",
    "desc": "简短描述"
  }
]
```

### 文本内容

在 `AboutMeText.vue` 中自定义文本部分：

```vue
<template #motto>
  <p class="about-me-card-title-normal">座右铭</p>
  <p class="about-me-card-text-big">代码。</p>
  <p class="about-me-card-text-big about-me-card-text-color">创造。启发。</p>
</template>
```

## 📱 组件结构

### 核心组件

本模板提供以下模块化组件：

- **`AboutMeName.vue`** - 个人介绍卡片
- **`AboutMeSkill.vue`** - 带图标的技能展示  
- **`AboutMeLife.vue`** - 日常活动展示
- **`AboutMeText.vue`** - 可定制文本内容
- **`AboutMeCharacter.vue`** - 个性/性格展示
- **`AboutMeFriendLink.vue`** - 好友链接网格
- **`Custom.vue`** - 带动画的主页布局
- **`FriendsPage.vue`** - 专门的好友页面

### 布局网格系统

在 `Custom.vue` 中使用 CSS Grid 类自定义布局：

```vue
<!-- 3:2 比例列 -->
<div class="card-content grid-row-3-2">
  <AboutMeName />
  <AboutMeText />
</div>

<!-- 两个相等列 -->  
<div class="card-content grid-row-1-1">
  <AboutMeSkill />
  <AboutMeLife />
</div>

<!-- 全宽 -->
<div class="card-content grid-row-1">
  <AboutMeFriendLink />
</div>
```

## 🎯 高级功能

### 动画背景

主页包含基于 Canvas 的交互式背景，具有：
- 响应鼠标移动的动画网格线
- 在屏幕上移动的彗星动画
- 适应屏幕尺寸的响应式设计

### 自定义 CSS 变量

在 `custom.css` 中定义您自己的颜色：

```css
:root {
  --main-card-background: rgba(255, 255, 255, 0.7);
  --main-card-border: #e3e8f7;
  --about-card-hover-bg: rgba(100, 190, 190, 0.8);
}

[data-theme="dark"] {
  --main-card-background: rgba(27, 28, 32, 0.7);
  --main-card-border: #3d3d3f;
}
```

### 图标集成

在整个组件中使用 Iconify 图标：

```vue
<icon name="logos:vue" />
<icon name="material-symbols:code" />
<icon name="vscode-icons:file-type-vscode" />
```

### 多语言支持

本模板支持英文和中文：
- 英文组件在 `docs/.vuepress/theme/components/`
- 中文组件在 `docs/zh-CN/theme/components/`

## 🛠️ 开发

### 本地开发

```bash
# 启动开发服务器
npm run docs:dev

# 构建生产版本  
npm run docs:build

# 预览生产构建
npm run docs:preview

# 清理开发缓存
npm run docs:dev-clean
```

### 文件结构

```
docs/
├── .vuepress/
│   ├── theme/
│   │   ├── components/        # Vue 组件
│   │   ├── data/             # JSON 数据文件
│   │   ├── styles/           # 自定义 CSS
│   │   └── template/         # 模板组件
│   ├── client.ts             # 组件注册
│   └── config.ts             # VuePress 配置
├── README.md                 # 主页
├── Tech/                     # 技术文章
├── notes/                    # 学习笔记
└── zh-CN/                       # 中文内容
```

## 🔧 故障排除

### 常见问题

1. **图标不显示**：在 [Iconify](https://icon-sets.iconify.design/) 验证图标名称

2. **样式未加载**：确保 CSS 文件在 `client.ts` 中导入

3. **Canvas 动画不工作**：检查浏览器控制台中的 JavaScript 错误

4. **构建失败**：运行 `npm run docs:dev-clean` 清理缓存

### 性能提示

- 优化图像并使用适当的格式
- Canvas 动画已经过性能优化
- 使用 CSS Grid 实现响应式布局
- 尽可能延迟加载非关键组件

## 📄 许可证

本模板是开源的，基于 MIT 许可证。

## 🤝 贡献

欢迎贡献！请随时提交问题和拉取请求。

## 📞 支持

如果您在设置此模板时需要帮助：
- 查看 [vuepress-theme-plume 文档](https://theme-plume.vuejs.press/)
- 在 GitHub 仓库上创建问题
- 查看现有组件结构以获取示例

---

**祝您博客愉快！🎉**