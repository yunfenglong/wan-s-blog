---
title: 靜態網站托管入門
createTime: 2025/08/01 21:48:56
permalink: /zh-TW/article/itoj0mz7/
tags:
  - GitHub Actions
  - 部署
  - 教程
---

## **前置條件**

喺開始之前，您只需要準備兩樣嘢：

1.  **GitHub 賬戶**：如果您還冇，請[喺 GitHub.com 免費註冊](https://github.com/signup)。呢將會係您代碼嘅中心樞紐。

2.  **簡單網站項目**：計算機上包含網站文件嘅文件夾。如果您還冇，請創建一個名為 `my-first-website` 嘅文件夾，並喺其中創建一個名為 `index.html` 嘅文件，內容如下：

    ```html title="index.html"
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>我嘅第一個網站</title>
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
        <h1>你好，世界！我嘅網站上線啦！</h1>
        <p>由 GitHub & Cloudflare 爱心托管。</p>
    </body>
    </html>
    ```

-----

::: tabs

@tab GitHub Pages

呢種方法直接從您嘅 GitHub 倉庫托管網站。佢非常簡單，同 GitHub 生態系深度集成，係完美嘅起點。

### ::carbon:rocket:: GitHub Pages 分步部署指南

::: steps

1.  **創建新嘅 GitHub 倉庫**

    倉庫（或"repo"）係托管喺 GitHub 上嘅項目文件夾。呢係您網站代碼嘅存放地。

      * 登錄 GitHub 並轉到您嘅儀表板。
      * 喺右上角，點擊 **`+`** 圖標並選擇 **New repository**。
      * 填寫表單，詳細信息如下：

        :::: field-group
        ::: field name="倉庫名稱" required type="string"
        輸入一個唯一嘅名稱，如 `my-first-website`。GitHub 將喺您網站嘅 URL 中使用呢個名稱。
        :::
        ::: field name="描述" type="string" optional
        簡要描述您嘅項目，例如："我嘅第一個上線網站，使用 GitHub Pages 部署！"。
        :::
        ::: field name="公開 / 私有" required
        選擇 **Public**。免費嘅 GitHub Pages 從公開倉庫托管。
        :::
        ::: field name="添加 README 文件" optional type="boolean"
        添加 README 文件嚟描述您嘅項目係個好習慣。您可以勾選呢個框。
        ::::
        ::::

      * 點擊綠色嘅 **Create repository** 按鈕。

2.  **上傳您嘅網站文件**

    倉庫創建完成后，而家可以添加您嘅網站文件了。

      * 喺新倉庫嘅主頁上，點擊 **Add file** 按鈕並選擇 **Upload files**。
      * 將您嘅 `index.html` 文件（或整個項目文件夾）拖放到指定區域。
      * 喺上傳區域下方，您會找到 **Commit changes** 部分。"commit" 係您更改嘅快照。
      * 輸入簡潔嘅提交消息，如 `feat: 添加初始網站文件`。
      * 點擊 **Commit changes**。

3.  **激活 GitHub Pages**

    而家，您只需要告訴 GitHub 將呢啲文件作為網站提供服務。

      * 喺您嘅倉庫中，點擊 **Settings** 標籤。
      * 喺左側邊欄中，點擊 **Pages**。
      * 喺 **Build and deployment** 下，對於 **Source**，選擇 `Deploy from a branch`。

4.  **配置同保存**

    告訴 GitHub 哪個分支同文件夾包含您嘅網站。

      * **Branch**：從下拉菜單中選擇 `main`。呢係您倉庫嘅主分支。
      * **Folder**：選擇 `/(root)`。呢告訴您嘅 `index.html` 喺主目錄中。
      * 點擊 **Save**。

5.  **訪問您嘅在線網站！**

    GitHub 而家正在構建同部署您嘅網站。呢個過程稱為"GitHub Action"，可能需要一兩分鐘。

      * 短暫等待后，刷新 **Pages** 設置頁面。
      * 項部將出現一個綠色框："您嘅網站已上線於 `https://<您嘅 GitHub 用戶名>.github.io/<您嘅倉庫名稱>/`"。
      * 點擊鏈接查看您嘅"Hello, World!"消息喺互聯網上實時顯示！

    ::: warning 請耐心等待！
    有時您嘅網站可能需要 5-10 分鐘先至首次顯示。如果您看到 404"Not Found"錯誤，請稍等片刻，清除瀏覽器緩存，然後重試。
    :::

@tab Cloudflare Pages

Cloudflare Pages 係一個更強大、更注重性能嘅替代方案。佢直接連接到您嘅 GitHub 倉庫，並喺其超快嘅全球網絡（CDN）上部署您嘅網站，免費提供自動 SSL、自定義域名同分析等功能。

### ::carbon:rocket:: Cloudflare Pages 分步部署指南

::: steps

1.  **創建 Cloudflare 賬戶**

    如果您還冇，請[註冊免費嘅 Cloudflare 賬戶](https://dash.cloudflare.com/sign-up)。過程好快，只需要郵箱地址同密碼。

2.  **創建 Pages 項目並連接到 GitHub**

      * 登錄您嘅 Cloudflare 儀表板。
      * 喺側邊欄中，導航到 **Workers & Pages**。
      * 點擊 **Create application**，然後選擇 **Pages** 標籤。
      * 點擊 **Connect to Git**。
      * 彈出窗口會要求您授權 Cloudflare 訪問您嘅 GitHub 賬戶。為咗安全起見，選擇 **Only select repositories** 並選擇 `my-first-website` 倉庫。
      * 點擊 **Install & Authorize**。

3.  **喺 Cloudflare 中選擇您嘅倉庫**

      * 授權后，您將被重定向返 Cloudflare。
      * 選擇 `my-first-website` 倉庫並點擊 **Begin setup**。

4.  **配置構建設置**

    呢係最重要嘅步驟。您喺告訴 Cloudflare 如何處理您嘅項目。對於簡單嘅 HTML 網站呢非常容易。

      * **Project name**：呢將默認為您嘅倉庫名稱（`my-first-website`）。呢亦都決定咗您嘅 `.pages.dev` 子域名。
      * **Production branch**：確保選擇咗 `main`。呢係 Cloudflare 將部署嘅分支。
      * 喺 **Build settings** 下：
          * **Framework preset**：保持為 `None`。呢係針對需要構建步驟嘅 React 或 Vue 等框架嘅網站。
          * **Build command**：==完全留空呢個字段。== [+build-command]
          * **Build output directory**：==留空或設置為 `/`。== [+output-dir]

    [+build-command]: 對於僅由 HTML、CSS 同 JavaScript 文件組成嘅網站，唔需要"構建"過程。文件已經係最終嘅可部署形式。您只會對使用 React、Vue 或 Svelte 等框架構建嘅項目使用構建命令，呢啲框架將源代碼編譯為優化嘅靜態資源。
    [+output-dir]: 呢告訴 Cloudflare 喺邊度搵到您嘅最終網站文件（例如 `index.html`）。由於您將 `index.html` 放喺倉庫嘅主文件夾（"根目錄"）中，呢設置默認係正確嘅。對於 VuePress 網站，呢通常係 `docs/.vuepress/dist`。

5.  **保存同部署**

      * 點擊藍色嘅 **Save and Deploy** 按鈕。
      * Cloudflare 而家將從 GitHub 獲取您嘅代碼並喺其全球網絡中部署。您可以實時觀看部署進度。通常喺一分鐘內完成。
      * 完成后，您會看到一個大嘅"Success!"消息。

6.  **訪問您嘅新、更快嘅網站！**

    Cloudflare 為您提供咗一個獨特、安全嘅 URL。

      * 您嘅網站 URL 將係：`https://my-first-website.pages.dev`。
      * 點擊鏈接查看您嘅在線網站，而家由 Cloudflare 嘅全球邊緣網絡提供服務！

    ::: tip 全部完成！
    您而家已成功使用兩種唔同、強大同免費嘅托管平台部署咗相同嘅網站。您可以睇到兩者如何連接到 GitHub 上嘅相同源代碼，但提供唔同嘅工作流程同優勢。
    :::

:::

## **使用 GitHub Actions 自動化部署**

手上上傳對於入門嚟講好，但現代 Web 開發嘅真正力量喺於自動化。通過使用 **GitHub Actions 工作流程**，您可以設置一個過程，每次向 `main` 分支推送更改時自動構建同部署您嘅網站。

呢被稱為持續集成/持續部署（CI/CD）嘅最佳實踐。

### ::mdi:robot-happy:: 設置您嘅自動部署工作流程

::: steps

1.  **創建工作流程目錄**

    GitHub Actions 工作流程由位於倉庫內特殊目錄中嘅 YAML 文件定義。

    *   喺項目嘅根文件夾中，創建一個名為 `.github` 嘅新文件夾。
    *   喺 `.github` 內，創建另一個名為 `workflows` 嘅文件夾。

2.  **創建工作流程文件**

    喺 `.github/workflows` 目錄中，創建一個名為 `deploy.yml` 嘅新文件。

3.  **添加工作流程代碼**

    將以下代碼複製粘貼到您嘅 `deploy.yml` 文件中。呢係 VuePress 網站嘅標準工作流程。

    ```yaml title=".github/workflows/deploy.yml"
    name: deploy

    on:
      # 推送到 main 分支時自動觸發部署
      push:
        branches: [main]
      # 允許從 GitHub Actions 標籤手動部署
      workflow_dispatch:

    jobs:
      docs:
        runs-on: ubuntu-latest

        steps:
          - uses: actions/checkout@v4
            with:
              # 獲取所有提交歷史以獲取"最后更新"信息
              fetch-depth: 0

          - name: Setup Node.js
            uses: actions/setup-node@v4
            with:
              # 使用 Node.js 版本 22
              node-version: 22

          # 使用 npm ci 進行更快、可靠嘅安裝
          - name: Install Dependencies
            run: npm ci

          # 運行 package.json 中定義嘅構建腳本
          - name: Build VuePress site
            run: npm run docs:build

          # 將構建嘅網站部署到 gh-pages 分支
          # @see https://github.com/crazy-max/ghaction-github-pages
          - name: Deploy to GitHub Pages
            uses: crazy-max/ghaction-github-pages@v4
            with:
              # 要部署到嘅分支
              target_branch: gh-pages
              # 要部署嘅目錄（VuePress 默認）
              build_dir: docs/.vuepress/dist
            env:
              # GITHUB_TOKEN 由 GitHub 自動提供
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```

4.  **提交並推送工作流程文件**

    保存 `deploy.yml` 文件，將其提交到您嘅倉庫，並推送到 GitHub。

    ```bash
    git add .github/workflows/deploy.yml
    git commit -m "ci: 添加 GitHub Actions 部署工作流程"
    git push
    ```

5.  **為 `gh-pages` 分支配置 GitHub Pages**

    工作流程將自動創建一個名為 `gh-pages` 嘅新分支，並將您構建嘅網站文件推送到其中。您需要告訴 GitHub Pages 使用呢個分支。

    *   轉到您倉庫嘅 **Settings > Pages**。
    *   喺 **Build and deployment** 下，將 **Source** 更改為 `Deploy from a branch`。
    *   將 **Branch** 更改為 `gh-pages`，文件夾更改為 `/(root)`。
    *   點擊 **Save**。

6.  **觀睇魔法發生**

    從而家開始，每次您向 `main` 分支推送更改時，工作流程都會自動運行。您可以喺 GitHub 倉庫嘅 **Actions** 標籤下查看其進度。佢將構建您嘅網站並將完成嘅產品部署到您嘅在線 GitHub Pages URL。

:::

## **問答同故障排除**

以下係您可能遇到嘅一些常見問題同問題嘅答案。

:::: collapse

- :+ **為什麼我嘅網站顯示 404 Not Found 錯誤？**

  - **等待幾分鐘**：部署可能需要時間喺整個網絡上傳播呢。呢係最常見嘅原因。請俾佢 5-10 分鐘，特別係第一次部署時。
  - **檢查文件路徑**：確保您嘅主 HTML 文件名為 `index.html`。如果您使用框架，請驗證 **Build output directory** 是否正確。對於標準 VuePress 網站，佢應該係 `docs/.vuepress/dist`。
  - **檢查倉庫可見性**：對於 GitHub Pages 免費版本，您嘅倉庫必須設置為 **Public**。
  - **檢查您嘅分支**：確保您部署嘅分支（`main` 或 `gh-pages`）係托管提供商設置中選擇嘅分支。

- :+ **我嘅 CSS 或 JavaScript 冇有加載。為什麼？**

  - **路徑唔正確**：呢係最可能嘅原因。檢查 HTML 中嘅 `href` 同 `src` 路徑。相對路徑（`/style.css` 或 `../scripts/main.js`）通常係最可靠嘅。
  - **區分大小寫**：Web 服務器通常區分大小寫。`style.css` 係同 `Style.css` 唔同嘅文件。仔細檢查您嘅文件名同路徑嘅大小寫是否正確。
  - **構建問題**：如果您使用框架，構建過程可能未能包含您嘅資源。檢查 GitHub Actions 或 Cloudflare Pages 中嘅構建日志是否有錯誤。

- :+ **如何使用自定義域名？**

  兩個平台都為自定義域名提供咗出色嘅支持。
  - **對於 GitHub Pages**：轉到 `Settings > Pages > Custom domain`，輸入您嘅域名（例如 `www.yourdomain.com`），然後保存。然後，轉到您嘅域名註冊商網站，添加 GitHub 提供嘅 `CNAME` 或 `A` 記錄。
  - **對於 Cloudflare Pages**：喺您嘅 Pages 項目中，轉到 **Custom domains** 標籤並按照設置向導操作。如果您域名嘅 DNS 已經由 Cloudflare 管理，呢個過程係無縫嘅，通常即時完成。

- :- **我應該使用 GitHub Pages 還係 Cloudflare Pages？**

  呢取決於您嘅需求！
  - **GitHub Pages** 非常適合簡單項目、個人博客同文檔網站，喺呢啲場景中易用性同埋 GitHub 嘅直接集成係優先考慮嘅。
  - **Cloudflare Pages** 更適合性能、安全性同可擴展性重要嘅網站。其全球 CDN、免費分析同重定向、預覽部署等高級功能使佢成為一個更強大、更專業嘅解決方案。對於大多數項目，**推薦使用 Cloudflare Pages**。

::::