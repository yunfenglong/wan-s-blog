---
title: 使用本站作為模版
createTime: 2025/08/03 22:21:50
permalink: /zh-TW/article/u3ylxdo1/
tags: 
  - 集成
  - 部署
---

本博客使用 [vuepress-theme-plume](https://theme-plume.vuejs.press/) 主題，並配備咗自定義主頁組件。

**在線演示：** [Wan's Blog](https://wanfung.me/) 或 [Wan's Blog](https://yunfenglong.github.io/wan-s-blog/)

本模板提供咗一個完全可定制嘅主頁，採用模塊化 Vue 組件架構。如果您想使用呢個博客作為模板，請按照下面嘅詳細設置指南進行操作。

## ✨ 功能特性

- 🎨 **完全可定制**：模塊化 Vue 組件架構
- 📱 **響應式設計**：喺所有設備上完美運行  
- 🚀 **現代技術棧**：Vue 3, VuePress, TypeScript
- 🎯 **模板就緒**：結構化便於複製
- 🌙 **主題支持**：自動明暗模式切換
- 🎪 **動畫背景**：交互式網格同彗星動畫
- 🎯 **社交集成**：GitHub、郵箱同自定義鏈接
- 📊 **圖表支持**：ECharts、Chart.js 同 Mermaid 集成

## 🚀 快速開始

### 1. 安裝

```bash
# 克隆或分叉呢個倉庫
git clone https://github.com/yunfenglong/wan-s-blog.git
cd wan-s-blog

# 安裝依賴
npm install

# 所需依賴已包含喺 package.json 中
```

### 2. 配置

本模板採用基於組件嘅架構，配備咗集中式樣式：

**關鍵配置文件：**
- `docs/.vuepress/config.ts` - VuePress 同主題配置
- `docs/.vuepress/client.ts` - 組件註冊
- `docs/.vuepress/theme/data/friends.json` - 好友/鏈接數據
- `docs/.vuepress/theme/styles/` - 自定義 CSS 樣式

### 3. 基本設置

1. **喺 `docs/README.md` 中配置主頁：**
```markdown
---
pageLayout: home
externalLinkIcon: false
config:
    - type: Custom
---
```

2. **組件已喺 `docs/.vuepress/client.ts` 中註冊：**
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

### 個人信息

直接編輯 `AboutMeName.vue` 組件或創建您自己嘅版本：

```vue
<!-- 喺 docs/.vuepress/theme/components/AboutMeName.vue 中 -->
<template>
  <div class="about-me-card-bg">
    <h1>您嘅名字</h1>
    <p>嘿，好高興認識你！👋</p>
    <p>您嘅精彩標語喺呢度。</p>
  </div>
</template>
```

### 技能同工具

自定義 `AboutMeSkill.vue` 組件：

```vue
<!-- 使用 Iconify 圖標添加您嘅技能 -->
<div class="skill-item">
  <icon name="logos:vue" />
  <span>Vue</span>
</div>
```

### 社交鏈接

喺 `Custom.vue` 中更新社交鏈接：

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

### 好友同鏈接

編輯 `docs/.vuepress/theme/data/friends.json`：

```json
[
  {
    "name": "好友姓名",
    "link": "https://friend-website.com", 
    "avatar": "https://friend-website.com/avatar.png",
    "desc": "簡短描述"
  }
]
```

### 文本內容

喺 `AboutMeText.vue` 中自定義文本部分：

```vue
<template #motto>
  <p class="about-me-card-title-normal">座右銘</p>
  <p class="about-me-card-text-big">代碼。</p>
  <p class="about-me-card-text-big about-me-card-text-color">創造。啟發。</p>
</template>
```

## 📱 組件結構

### 核心組件

本模板提供以下模塊化組件：

- **`AboutMeName.vue`** - 個人介紹卡片
- **`AboutMeSkill.vue`** - 帶圖標嘅技能展示  
- **`AboutMeLife.vue`** - 日常活動展示
- **`AboutMeText.vue`** - 可定制文本內容
- **`AboutMeCharacter.vue`** - 個性/性格展示
- **`AboutMeFriendLink.vue`** - 好友鏈接網格
- **`Custom.vue`** - 帶動畫嘅主頁佈局
- **`FriendsPage.vue`** - 專門嘅好友頁面

### 佈局網格系統

喺 `Custom.vue` 中使用 CSS Grid 類自定義佈局：

```vue
<!-- 3:2 比例列 -->
<div class="card-content grid-row-3-2">
  <AboutMeName />
  <AboutMeText />
</div>

<!-- 兩個相等列 -->  
<div class="card-content grid-row-1-1">
  <AboutMeSkill />
  <AboutMeLife />
</div>

<!-- 全寬 -->
<div class="card-content grid-row-1">
  <AboutMeFriendLink />
</div>
```

## 🎯 高級功能

### 動畫背景

主頁包含基於 Canvas 嘅交互式背景，具有：
- 響應鼠標移動嘅動畫網格線
- 喺屏幕上移動嘅彗星動畫
- 響應屏幕尺寸嘅響應式設計

### 自定義 CSS 變量

喺 `custom.css` 中定義您自己嘅顏色：

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

### 圖標集成

喺整個組件中使用 Iconify 圖標：

```vue
<icon name="logos:vue" />
<icon name="material-symbols:code" />
<icon name="vscode-icons:file-type-vscode" />
```

### 多語言支持

本模板支持英文同中文：
- 英文組件喺 `docs/.vuepress/theme/components/`
- 中文組件喺 `docs/zh/theme/components/`

## 🛠️ 開發

### 本地開發

```bash
# 啟動開發服務器
npm run docs:dev

# 構建生產版本  
npm run docs:build

# 預覽生產構建
npm run docs:preview

# 清理開發緩存
npm run docs:dev-clean
```

### 文件結構

```
docs/
├── .vuepress/
│   ├── theme/
│   │   ├── components/        # Vue 組件
│   │   ├── data/             # JSON 數據文件
│   │   ├── styles/           # 自定義 CSS
│   │   └── template/         # 模板組件
│   ├── client.ts             # 組件註冊
│   └── config.ts             # VuePress 配置
├── README.md                 # 主頁
├── Tech/                     # 技術文章
├── notes/                    # 學習筆記
└── zh-TW/                       # 中文內容
```

## 🔧 故障排除

### 常見問題

1. **圖標唔顯示**：喺 [Iconify](https://icon-sets.iconify.design/) 驗證圖標名稱

2. **樣式未加載**：確保 CSS 文件喺 `client.ts` 中導入

3. **Canvas 動畫唔工作**：檢查瀏覽器控制台中嘅 JavaScript 錯誤

4. **構建失敗**：運行 `npm run docs:dev-clean` 清理緩存

### 性能提示

- 優化圖像並使用適當嘅格式
- Canvas 動畫已經過性能優化
- 使用 CSS Grid 實現響應式佈局
- 盡可能延遲加載非關鍵組件

## 📄 許可證

本模板係開源嘅，基於 MIT 許可證。

## 🤝 貢獻

歡迎貢獻！請隨時提交問題同拉取請求。

## 📞 支持

如果您喺設置呢個模板時需要帮助：
- 查看 [vuepress-theme-plume 文檔](https://theme-plume.vuejs.press/)
- 喺 GitHub 倉庫上創建問題
- 查看現有組件結構以獲取示例

---

**祝您博客愉快！🎉**