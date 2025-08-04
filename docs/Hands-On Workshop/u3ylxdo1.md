---
title: Using This Site as a Template
createTime: 2025/08/03 22:21:50
permalink: /article/u3ylxdo1/
tags: 
  - Integration
  - Deployment
---

This blog uses the [vuepress-theme-plume](https://theme-plume.vuejs.press/) theme with custom homepage components.

**Live Demo:** [Wan's Blog](https://wanfung.me/) or [Wan's Blog](https://yunfenglong.github.io/wan-s-blog/)

This template provides a fully customizable homepage with modular Vue components. If you want to use this blog as a template, follow the comprehensive setup guide below.

## ✨ Features

- 🎨 **Fully Customizable**: Modular Vue component architecture
- 📱 **Responsive Design**: Works perfectly on all devices  
- 🚀 **Modern Tech Stack**: Vue 3, VuePress, TypeScript
- 🎯 **Template-Ready**: Structured for easy replication
- 🌙 **Theme Support**: Automatic light/dark mode
- 🎪 **Animated Background**: Interactive grid with comet animations
- 🎯 **Social Integration**: GitHub, email, and custom links
- 📊 **Chart Support**: ECharts, Chart.js, and Mermaid integration

## 🚀 Quick Start

### 1. Installation

```bash
# Clone or fork this repository
git clone https://github.com/yunfenglong/wan-s-blog.git
cd wan-s-blog

# Install dependencies
npm install

# All required dependencies are already included in package.json
```

### 2. Configuration

The template uses a component-based architecture with centralized styling:

**Key Configuration Files:**
- `docs/.vuepress/config.ts` - VuePress and theme configuration
- `docs/.vuepress/client.ts` - Component registration
- `docs/.vuepress/theme/data/friends.json` - Friends/links data
- `docs/.vuepress/theme/styles/` - Custom CSS styles

### 3. Basic Setup

1. **Configure your homepage in `docs/README.md`:**
```markdown
---
pageLayout: home
externalLinkIcon: false
config:
    - type: Custom
---
```

2. **Components are already registered in `docs/.vuepress/client.ts`:**
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

## 🎨 Customization Guide

### Personal Information

Edit the `AboutMeName.vue` component directly or create your own version:

```vue
<!-- In docs/.vuepress/theme/components/AboutMeName.vue -->
<template>
  <div class="about-me-card-bg">
    <h1>Your Name</h1>
    <p>Hey, nice to meet you!👋</p>
    <p>Your awesome tagline here.</p>
  </div>
</template>
```

### Skills & Technologies

Customize the `AboutMeSkill.vue` component:

```vue
<!-- Add your skills with Iconify icons -->
<div class="skill-item">
  <icon name="logos:vue" />
  <span>Vue</span>
</div>
```

### Social Links

Update social links in `Custom.vue`:

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

### Friends & Links

Edit `docs/.vuepress/theme/data/friends.json`:

```json
[
  {
    "name": "Friend Name",
    "link": "https://friend-website.com", 
    "avatar": "https://friend-website.com/avatar.png",
    "desc": "Brief description"
  }
]
```

### Text Content

Customize text sections in `AboutMeText.vue`:

```vue
<template #motto>
  <p class="about-me-card-title-normal">Motto</p>
  <p class="about-me-card-text-big">Code.</p>
  <p class="about-me-card-text-big about-me-card-text-color">Create. Inspire.</p>
</template>
```

## 📱 Component Structure

### Core Components

The template provides these modular components:

- **`AboutMeName.vue`** - Personal introduction card
- **`AboutMeSkill.vue`** - Skills showcase with icons  
- **`AboutMeLife.vue`** - Daily activities display
- **`AboutMeText.vue`** - Customizable text content
- **`AboutMeCharacter.vue`** - Personality/character display
- **`AboutMeFriendLink.vue`** - Friends links grid
- **`Custom.vue`** - Main homepage layout with animations
- **`FriendsPage.vue`** - Dedicated friends page

### Layout Grid System

Customize layouts using CSS Grid classes in `Custom.vue`:

```vue
<!-- 3:2 ratio columns -->
<div class="card-content grid-row-3-2">
  <AboutMeName />
  <AboutMeText />
</div>

<!-- Two equal columns -->  
<div class="card-content grid-row-1-1">
  <AboutMeSkill />
  <AboutMeLife />
</div>

<!-- Full width -->
<div class="card-content grid-row-1">
  <AboutMeFriendLink />
</div>
```

## 🎯 Advanced Features

### Animated Background

The homepage includes an interactive canvas-based background with:
- Animated grid lines that respond to mouse movement
- Comet animations that travel across the screen
- Responsive design that adapts to screen size

### Custom CSS Variables

Define your own colors in `custom.css`:

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

### Icon Integration

Use Iconify icons throughout your components:

```vue
<icon name="logos:vue" />
<icon name="material-symbols:code" />
<icon name="vscode-icons:file-type-vscode" />
```

### Multi-language Support

The template supports both English and Chinese:
- English components in `docs/.vuepress/theme/components/`
- Chinese components in `docs/zh/theme/components/`

## 🛠️ Development

### Local Development

```bash
# Start development server
npm run docs:dev

# Build for production  
npm run docs:build

# Preview production build
npm run docs:preview

# Clean development cache
npm run docs:dev-clean
```

### File Structure

```
docs/
├── .vuepress/
│   ├── theme/
│   │   ├── components/        # Vue components
│   │   ├── data/             # JSON data files
│   │   ├── styles/           # Custom CSS
│   │   └── template/         # Template components
│   ├── client.ts             # Component registration
│   └── config.ts             # VuePress configuration
├── README.md                 # Homepage
├── Tech/                     # Technical articles
├── notes/                    # Study notes
└── zh/                       # Chinese content
```

## 🔧 Troubleshooting

### Common Issues

1. **Icons not showing**: Verify icon names at [Iconify](https://icon-sets.iconify.design/)

2. **Styles not loading**: Ensure CSS files are imported in `client.ts`

3. **Canvas animations not working**: Check browser console for JavaScript errors

4. **Build fails**: Run `npm run docs:dev-clean` to clear cache

### Performance Tips

- Optimize images and use appropriate formats
- The canvas animation is already optimized for performance
- Use CSS Grid for responsive layouts
- Lazy load non-critical components when possible

## 📄 License

This template is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📞 Support

If you need help setting up this template:
- Check the [vuepress-theme-plume documentation](https://theme-plume.vuejs.press/)
- Create an issue on the GitHub repository
- Review the existing component structure for examples

---

**Happy blogging! 🎉**