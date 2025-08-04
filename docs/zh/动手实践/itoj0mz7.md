---
title: 静态网站托管入门
createTime: 2025/08/01 21:48:56
permalink: /zh/article/itoj0mz7/
tags:
  - GitHub Actions
  - 部署
  - 教程
---

## **前置条件**

在开始之前，您只需要准备两样东西：

1.  **GitHub 账户**：如果您还没有，请[在 GitHub.com 免费注册](https://github.com/signup)。这将是您代码的中心枢纽。

2.  **简单网站项目**：计算机上包含网站文件的文件夹。如果您还没有，请创建一个名为 `my-first-website` 的文件夹，并在其中创建一个名为 `index.html` 的文件，内容如下：

    ```html title="index.html"
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>我的第一个网站</title>
        <style>
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
                display: grid; 
                place-content: center; 
                height: 100vh; 
                margin: 0; 
                background-color: #f0f2f5; 
                color: #333;
                text-align: center;
            }
            h1 { 
                color: #1c1e21; 
                font-size: 2.5rem;
                text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
            }
        </style>
    </head>
    <body>
        <h1>你好，世界！我的网站上线了！</h1>
        <p>由 GitHub & Cloudflare 爱心托管。</p>
    </body>
    </html>
    ```

-----

::: tabs

@tab GitHub Pages

此方法直接从您的 GitHub 仓库托管网站。它非常简单，与 GitHub 生态系统深度集成，是完美的起点。

### ::carbon:rocket:: GitHub Pages 分步部署指南

::: steps

1.  **创建新的 GitHub 仓库**

    仓库（或"repo"）是托管在 GitHub 上的项目文件夹。这是您网站代码的存放地。

      * 登录 GitHub 并转到您的仪表板。
      * 在右上角，点击 **`+`** 图标并选择 **New repository**。
      * 填写表单，详细信息如下：

        :::: field-group
        ::: field name="仓库名称" required type="string"
        输入一个唯一的名称，如 `my-first-website`。GitHub 将在您网站的 URL 中使用此名称。
        :::
        ::: field name="描述" type="string" optional
        简要描述您的项目，例如："我的第一个上线网站，使用 GitHub Pages 部署！"。
        :::
        ::: field name="公开 / 私有" required
        选择 **Public**。免费的 GitHub Pages 从公开仓库托管。
        :::
        ::: field name="添加 README 文件" optional type="boolean"
        添加 README 文件来描述您的项目是个好习惯。您可以勾选此框。
        ::::
        ::::

      * 点击绿色的 **Create repository** 按钮。

2.  **上传您的网站文件**

    仓库创建完成后，现在可以添加您的网站文件了。

      * 在新仓库的主页上，点击 **Add file** 按钮并选择 **Upload files**。
      * 将您的 `index.html` 文件（或整个项目文件夹）拖放到指定区域。
      * 在上传区域下方，您会找到 **Commit changes** 部分。"commit" 是您更改的快照。
      * 输入简洁的提交消息，如 `feat: 添加初始网站文件`。
      * 点击 **Commit changes**。

3.  **激活 GitHub Pages**

    现在，您只需要告诉 GitHub 将这些文件作为网站提供服务。

      * 在您的仓库中，点击 **Settings** 标签。
      * 在左侧边栏中，点击 **Pages**。
      * 在 **Build and deployment** 下，对于 **Source**，选择 `Deploy from a branch`。

4.  **配置和保存**

    告诉 GitHub 哪个分支和文件夹包含您的网站。

      * **Branch**：从下拉菜单中选择 `main`。这是您仓库的主分支。
      * **Folder**：选择 `/(root)`。这告诉 GitHub 您的 `index.html` 在主目录中。
      * 点击 **Save**。

5.  **访问您的在线网站！**

    GitHub 现在正在构建和部署您的网站。这个过程称为"GitHub Action"，可能需要一两分钟。

      * 短暂等待后，刷新 **Pages** 设置页面。
      * 顶部将出现一个绿色框："您的网站已上线于 `https://<您的 GitHub 用户名>.github.io/<您的仓库名称>/`"。
      * 点击链接查看您的"Hello, World!"消息在互联网上实时显示！

    ::: warning 请耐心等待！
    有时您的网站可能需要 5-10 分钟才能首次显示。如果您看到 404"Not Found"错误，请稍等片刻，清除浏览器缓存，然后重试。
    :::

@tab Cloudflare Pages

Cloudflare Pages 是一个更强大、更注重性能的替代方案。它直接连接到您的 GitHub 仓库，并在其超快的全球网络（CDN）上部署您的网站，免费提供自动 SSL、自定义域名和分析等功能。

### ::carbon:rocket:: Cloudflare Pages 分步部署指南

::: steps

1.  **创建 Cloudflare 账户**

    如果您还没有，请[注册免费的 Cloudflare 账户](https://dash.cloudflare.com/sign-up)。过程很快，只需要邮箱地址和密码。

2.  **创建 Pages 项目并连接到 GitHub**

      * 登录您的 Cloudflare 仪表板。
      * 在侧边栏中，导航到 **Workers & Pages**。
      * 点击 **Create application**，然后选择 **Pages** 标签。
      * 点击 **Connect to Git**。
      * 弹出窗口会要求您授权 Cloudflare 访问您的 GitHub 账户。为了安全起见，选择 **Only select repositories** 并选择 `my-first-website` 仓库。
      * 点击 **Install & Authorize**。

3.  **在 Cloudflare 中选择您的仓库**

      * 授权后，您将被重定向回 Cloudflare。
      * 选择 `my-first-website` 仓库并点击 **Begin setup**。

4.  **配置构建设置**

    这是最重要的步骤。您在告诉 Cloudflare 如何处理您的项目。对于简单的 HTML 网站，这非常容易。

      * **Project name**：这将默认为您的仓库名称（`my-first-website`）。这也决定了您的 `.pages.dev` 子域名。
      * **Production branch**：确保选择了 `main`。这是 Cloudflare 将部署的分支。
      * 在 **Build settings** 下：
          * **Framework preset**：保持为 `None`。这是针对需要构建步骤的 React 或 Vue 等框架的网站。
          * **Build command**：==完全留空此字段。== [+build-command]
          * **Build output directory**：==留空或设置为 `/`。== [+output-dir]

    [+build-command]: 对于仅由 HTML、CSS 和 JavaScript 文件组成的网站，不需要"构建"过程。文件已经是最终的可部署形式。您只会对使用 React、Vue 或 Svelte 等框架构建的项目使用构建命令，这些框架将源代码编译为优化的静态资源。
    [+output-dir]: 这告诉 Cloudflare 在哪里找到您的最终网站文件（例如 `index.html`）。由于您将 `index.html` 放在仓库的主文件夹（"根目录"）中，此设置默认是正确的。对于 VuePress 网站，这通常是 `docs/.vuepress/dist`。

5.  **保存和部署**

      * 点击蓝色的 **Save and Deploy** 按钮。
      * Cloudflare 现在将从 GitHub 获取您的代码并在其全球网络中部署。您可以实时观看部署进度。通常在一分钟内完成。
      * 完成后，您会看到一个大的"Success!"消息。

6.  **访问您的新、更快的网站！**

    Cloudflare 为您提供了一个独特、安全的 URL。

      * 您的网站 URL 将是：`https://my-first-website.pages.dev`。
      * 点击链接查看您的在线网站，现在由 Cloudflare 的全球边缘网络提供服务！

    ::: tip 全部完成！
    您现在已成功使用两种不同、强大且免费的托管平台部署了相同的网站。您可以看到两者如何连接到 GitHub 上的相同源代码，但提供不同的工作流程和优势。
    :::

:::

## **使用 GitHub Actions 自动化部署**

手动上传对于入门来说很好，但现代 Web 开发的真正力量在于自动化。通过使用 **GitHub Actions 工作流程**，您可以设置一个过程，每次向 `main` 分支推送更改时自动构建和部署您的网站。

这被称为持续集成/持续部署（CI/CD）的最佳实践。

### ::mdi:robot-happy:: 设置您的自动部署工作流程

::: steps

1.  **创建工作流程目录**

    GitHub Actions 工作流程由位于仓库内特殊目录中的 YAML 文件定义。

    *   在项目的根文件夹中，创建一个名为 `.github` 的新文件夹。
    *   在 `.github` 内，创建另一个名为 `workflows` 的文件夹。

2.  **创建工作流程文件**

    在 `.github/workflows` 目录中，创建一个名为 `deploy.yml` 的新文件。

3.  **添加工作流程代码**

    将以下代码复制粘贴到您的 `deploy.yml` 文件中。这是 VuePress 网站的标准工作流程。

    ```yaml title=".github/workflows/deploy.yml"
    name: deploy

    on:
      # 推送到 main 分支时自动触发部署
      push:
        branches: [main]
      # 允许从 GitHub Actions 标签手动部署
      workflow_dispatch:

    jobs:
      docs:
        runs-on: ubuntu-latest

        steps:
          - uses: actions/checkout@v4
            with:
              # 获取所有提交历史以获取"最后更新"信息
              fetch-depth: 0

          - name: Setup Node.js
            uses: actions/setup-node@v4
            with:
              # 使用 Node.js 版本 22
              node-version: 22

          # 使用 npm ci 进行更快、可靠的安装
          - name: Install Dependencies
            run: npm ci

          # 运行 package.json 中定义的构建脚本
          - name: Build VuePress site
            run: npm run docs:build

          # 将构建的网站部署到 gh-pages 分支
          # @see https://github.com/crazy-max/ghaction-github-pages
          - name: Deploy to GitHub Pages
            uses: crazy-max/ghaction-github-pages@v4
            with:
              # 要部署到的分支
              target_branch: gh-pages
              # 要部署的目录（VuePress 默认）
              build_dir: docs/.vuepress/dist
            env:
              # GITHUB_TOKEN 由 GitHub 自动提供
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```

4.  **提交并推送工作流程文件**

    保存 `deploy.yml` 文件，将其提交到您的仓库，并推送到 GitHub。

    ```bash
    git add .github/workflows/deploy.yml
    git commit -m "ci: 添加 GitHub Actions 部署工作流程"
    git push
    ```

5.  **为 `gh-pages` 分支配置 GitHub Pages**

    工作流程将自动创建一个名为 `gh-pages` 的新分支，并将您构建的网站文件推送到其中。您需要告诉 GitHub Pages 使用这个分支。

    *   转到您仓库的 **Settings > Pages**。
    *   在 **Build and deployment** 下，将 **Source** 更改为 `Deploy from a branch`。
    *   将 **Branch** 更改为 `gh-pages`，文件夹更改为 `/(root)`。
    *   点击 **Save**。

6.  **观看魔法发生**

    从现在开始，每次您向 `main` 分支推送更改时，工作流程都会自动运行。您可以在 GitHub 仓库的 **Actions** 标签下查看其进度。它将构建您的网站并将完成的产品部署到您的在线 GitHub Pages URL。

:::

## **问答和故障排除**

以下是您可能遇到的一些常见问题和问题的答案。

:::: collapse

- :+ **为什么我的网站显示 404 Not Found 错误？**

  - **等待几分钟**：部署可能需要时间在整个网络上传播。这是最常见的原因。请给它 5-10 分钟，特别是在第一次部署时。
  - **检查文件路径**：确保您的主 HTML 文件名为 `index.html`。如果您使用框架，请验证 **Build output directory** 是否正确。对于标准 VuePress 网站，它应该是 `docs/.vuepress/dist`。
  - **检查仓库可见性**：对于 GitHub Pages 的免费版本，您的仓库必须设置为 **Public**。
  - **检查您的分支**：确保您部署的分支（`main` 或 `gh-pages`）是托管提供商设置中选择的分支。

- :+ **我的 CSS 或 JavaScript 没有加载。为什么？**

  - **路径不正确**：这是最可能的原因。检查 HTML 中的 `href` 和 `src` 路径。相对路径（`/style.css` 或 `../scripts/main.js`）通常是最可靠的。
  - **区分大小写**：Web 服务器通常区分大小写。`style.css` 是与 `Style.css` 不同的文件。仔细检查您的文件名和路径的大小写是否正确。
  - **构建问题**：如果您使用框架，构建过程可能未能包含您的资源。检查 GitHub Actions 或 Cloudflare Pages 中的构建日志是否有错误。

- :+ **如何使用自定义域名？**

  两个平台都为自定义域名提供了出色的支持。
  - **对于 GitHub Pages**：转到 `Settings > Pages > Custom domain`，输入您的域名（例如 `www.yourdomain.com`），然后保存。然后，转到您的域名注册商网站，添加 GitHub 提供的 `CNAME` 或 `A` 记录。
  - **对于 Cloudflare Pages**：在您的 Pages 项目中，转到 **Custom domains** 标签并按照设置向导操作。如果您域名的 DNS 已经由 Cloudflare 管理，这个过程是无缝的，通常即时完成。

- :- **我应该使用 GitHub Pages 还是 Cloudflare Pages？**

  这取决于您的需求！
  - **GitHub Pages** 非常适合简单项目、个人博客和文档网站，在这些场景中易用性和与 GitHub 的直接集成是优先考虑的。
  - **Cloudflare Pages** 更适合性能、安全性和可扩展性重要的网站。其全球 CDN、免费分析和重定向、预览部署等高级功能使其成为一个更强大、更专业的解决方案。对于大多数项目，**推荐使用 Cloudflare Pages**。

::::