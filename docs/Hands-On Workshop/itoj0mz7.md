---
title: Introduction to Static Site Hosting
createTime: 2025/08/01 21:48:56
permalink: /article/itoj0mz7/
tags:
  - GitHub Actions
  - Deployment
  - Tutorial
---

## **Prerequisites**

Before you start, you only need two things:

1.  **A GitHub Account**: If you don't have one, [sign up for free at GitHub.com](https://github.com/signup). This will be the central hub for your code.

2.  **A Simple Website Project**: A folder on your computer with your website files. If you don't have one, create a folder named `my-first-website`, and inside it, create a file called `index.html` with the following content:

    ```html title="index.html"
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My First Website</title>
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
        <h1>Hello, World! My website is live!</h1>
        <p>Hosted with love by GitHub & Cloudflare.</p>
    </body>
    </html>
    ```

-----

::: tabs

@tab GitHub Pages

This method hosts your website directly from your GitHub repository. It's incredibly straightforward and deeply integrated with the GitHub ecosystem, making it a perfect starting point.

### ::carbon:rocket:: Step-by-Step Deployment to GitHub Pages

::: steps

1.  **Create a New GitHub Repository**

    A repository (or "repo") is a project folder hosted on GitHub. This is where your website's code will live.

      * Log into GitHub and go to your dashboard.
      * In the top-right corner, click the **`+`** icon and select **New repository**.
      * Fill out the form with the following details:

        :::: field-group
        ::: field name="Repository name" required type="string"
        Enter a unique name, like `my-first-website`. GitHub will use this in your site's URL.
        :::
        ::: field name="Description" type="string" optional
        Briefly describe your project, e.g., "My first live website, deployed with GitHub Pages!".
        :::
        ::: field name="Public / Private" required
        Select **Public**. Free GitHub Pages are hosted from public repositories.
        :::
        ::: field name="Add a README file" optional type="boolean"
        It's good practice to add a README file to describe your project. You can check this box.
        :::
        ::::

      * Click the green **Create repository** button.

2.  **Upload Your Website Files**

    With your repository created, it's time to add your website's files.

      * On your new repository's main page, click the **Add file** button and select **Upload files**.
      * Drag and drop your `index.html` file (or your entire project folder) into the designated area.
      * Below the upload area, you'll find the **Commit changes** section. A "commit" is a snapshot of your changes.
      * Type a concise commit message, such as `feat: Add initial website files`.
      * Click **Commit changes**.

3.  **Activate GitHub Pages**

    Now, you just need to tell GitHub to serve these files as a website.

      * In your repository, click the **Settings** tab.
      * On the left sidebar, click **Pages**.
      * Under **Build and deployment**, for the **Source**, select `Deploy from a branch`.

4.  **Configure and Save**

    Tell GitHub which branch and folder contain your site.

      * **Branch**: Select `main` from the dropdown. This is the primary branch of your repository.
      * **Folder**: Select `/(root)`. This tells GitHub that your `index.html` is in the main directory.
      * Click **Save**.

5.  **Visit Your Live Website!**

    GitHub is now building and deploying your site. This process, called a "GitHub Action," might take a minute or two.

      * After a short wait, refresh the **Pages** settings page.
      * A green box will appear at the top: "Your site is live at `https://<Your-GitHub-Username>.github.io/<your-repository-name>/`".
      * Click the link to see your "Hello, World!" message live on the internet!

    ::: warning Be Patient!
    It can sometimes take 5-10 minutes for your site to become visible for the first time. If you see a 404 "Not Found" error, wait a bit, clear your browser cache, and try again.
    :::

@tab Cloudflare Pages

Cloudflare Pages is a more powerful, performance-focused alternative. It connects directly to your GitHub repository and deploys your site on its super-fast global network (CDN), offering benefits like automatic SSL, custom domains, and analytics for free.

### ::carbon:rocket:: Step-by-Step Deployment to Cloudflare Pages

::: steps

1.  **Create a Cloudflare Account**

    If you don't already have one, [sign up for a free Cloudflare account](https://dash.cloudflare.com/sign-up). The process is quick and only requires an email address and password.

2.  **Create a Pages Project & Connect to GitHub**

      * Log into your Cloudflare dashboard.
      * On the sidebar, navigate to **Workers & Pages**.
      * Click **Create application**, then select the **Pages** tab.
      * Click **Connect to Git**.
      * A pop-up will ask you to authorize Cloudflare with your GitHub account. For security, select **Only select repositories** and choose the `my-first-website` repository.
      * Click **Install & Authorize**.

3.  **Select Your Repository in Cloudflare**

      * Once authorized, you'll be redirected back to Cloudflare.
      * Select the `my-first-website` repository and click **Begin setup**.

4.  **Configure Your Build Settings**

    This is the most important step. You are telling Cloudflare how to handle your project. For a simple HTML site, it's very easy.

      * **Project name**: This will default to your repository name (`my-first-website`). This also determines your `.pages.dev` subdomain.
      * **Production branch**: Ensure `main` is selected. This is the branch Cloudflare will deploy from.
      * Under **Build settings**:
          * **Framework preset**: Leave this as `None`. This is for sites using frameworks like React or Vue that require a build step.
          * **Build command**: ==Leave this field completely blank.== [+build-command]
          * **Build output directory**: ==Leave this field blank or set to `/`.== [+output-dir]

    [+build-command]: For a website made of just HTML, CSS, and JavaScript files, no "build" process is necessary. The files are already in their final, deployable form. You would only use a build command for projects built with frameworks like React, Vue, or Svelte, which compile source code into optimized static assets.
    [+output-dir]: This tells Cloudflare where to find your final website files (e.g., `index.html`). Since you placed your `index.html` in the main folder (the "root") of your repository, this setting is correct by default. For a VuePress site, this would typically be `docs/.vuepress/dist`.

5.  **Save and Deploy**

      * Click the blue **Save and Deploy** button.
      * Cloudflare will now fetch your code from GitHub and deploy it across its global network. You can watch the deployment progress in real-time. It's usually finished in under a minute.
      * When it's done, you'll see a big "Success!" message.

6.  **Visit Your New, Faster Website!**

    Cloudflare provides you with a unique, secure URL.

      * Your website URL will be: `https://my-first-website.pages.dev`.
      * Click the link to see your live site, now served by Cloudflare's global edge network!

    ::: tip All Done!
    You have now successfully deployed the same website using two different, powerful, and free hosting platforms. You can see how both connect to the same source code on GitHub but provide different workflows and benefits.
    :::

:::

## **Automating Deployment with GitHub Actions**

Manual uploads are great for getting started, but the real power of modern web development lies in automation. By using a **GitHub Actions workflow**, you can set up a process that automatically builds and deploys your website every time you push a change to your `main` branch.

This is a best practice known as Continuous Integration/Continuous Deployment (CI/CD).

### ::mdi:robot-happy:: Setting Up Your Auto-Deployment Workflow

::: steps

1.  **Create the Workflow Directory**

    GitHub Actions workflows are defined by YAML files located in a special directory within your repository.

    *   In your project's root folder, create a new folder named `.github`.
    *   Inside `.github`, create another folder named `workflows`.

2.  **Create the Workflow File**

    Inside the `.github/workflows` directory, create a new file named `deploy.yml`.

3.  **Add the Workflow Code**

    Copy and paste the following code into your `deploy.yml` file. This is a standard workflow for a VuePress site.

    ```yaml title=".github/workflows/deploy.yml"
    name: deploy

    on:
      # Automatically trigger deployment on pushes to the main branch
      push:
        branches: [main]
      # Allow manual deployment from the GitHub Actions tab
      workflow_dispatch:

    jobs:
      docs:
        runs-on: ubuntu-latest

        steps:
          - uses: actions/checkout@v4
            with:
              # Fetch all commit history to get "last updated" info
              fetch-depth: 0

          - name: Setup Node.js
            uses: actions/setup-node@v4
            with:
              # Use Node.js version 22
              node-version: 22

          # Install dependencies using npm ci for faster, reliable installs
          - name: Install Dependencies
            run: npm ci

          # Run the build script defined in your package.json
          - name: Build VuePress site
            run: npm run docs:build

          # Deploy the built site to the gh-pages branch
          # @see https://github.com/crazy-max/ghaction-github-pages
          - name: Deploy to GitHub Pages
            uses: crazy-max/ghaction-github-pages@v4
            with:
              # The branch to deploy to
              target_branch: gh-pages
              # The directory to deploy from (VuePress default)
              build_dir: docs/.vuepress/dist
            env:
              # The GITHUB_TOKEN is automatically provided by GitHub
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```

4.  **Commit and Push the Workflow File**

    Save the `deploy.yml` file, commit it to your repository, and push it to GitHub.

    ```bash
    git add .github/workflows/deploy.yml
    git commit -m "ci: Add GitHub Actions workflow for deployment"
    git push
    ```

5.  **Configure GitHub Pages for the `gh-pages` Branch**

    The workflow will automatically create a new branch called `gh-pages` and push your built website files to it. You need to tell GitHub Pages to use this branch.

    *   Go to your repository's **Settings > Pages**.
    *   Under **Build and deployment**, change the **Source** to `Deploy from a branch`.
    *   Change the **Branch** to `gh-pages` and the folder to `/(root)`.
    *   Click **Save**.

6.  **Watch the Magic Happen**

    From now on, every time you push a change to your `main` branch, the workflow will automatically run. You can view its progress under the **Actions** tab in your GitHub repository. It will build your site and deploy the finished product to your live GitHub Pages URL.

:::

## **Q&A and Troubleshooting**

Here are answers to some common questions and issues you might encounter.

:::: collapse

- :+ **Why is my site showing a 404 Not Found error?**

  - **Wait a few minutes**: Deployments can take time to propagate across the web. This is the most common reason. Give it 5-10 minutes, especially on the first deployment.
  - **Check the file path**: Ensure your main HTML file is named `index.html`. If you're using a framework, verify that the **Build output directory** is correct. For a standard VuePress site, it should be `docs/.vuepress/dist`.
  - **Check repository visibility**: For the free tier of GitHub Pages, your repository must be set to **Public**.
  - **Check your branch**: Make sure the branch you are deploying from (`main` or `gh-pages`) is the one selected in your hosting provider's settings.

- :+ **My CSS or JavaScript is not loading. Why?**

  - **Incorrect paths**: This is the most likely cause. Check the `href` and `src` paths in your HTML. Relative paths (`/style.css` or `../scripts/main.js`) are usually the most reliable.
  - **Case sensitivity**: Web servers are typically case-sensitive. `style.css` is a different file from `Style.css`. Double-check your filenames and paths for correct casing.
  - **Build issues**: If you're using a framework, it's possible the build process failed to include your assets. Check the build logs in GitHub Actions or Cloudflare Pages for errors.

- :+ **How do I use a custom domain?**

  Both platforms provide excellent support for custom domains.
  - **For GitHub Pages**: Go to `Settings > Pages > Custom domain`, enter your domain name (e.g., `www.yourdomain.com`), and save. Then, go to your domain registrar's website and add the `CNAME` or `A` records that GitHub provides.
  - **For Cloudflare Pages**: In your Pages project, go to the **Custom domains** tab and follow the setup wizard. If your domain's DNS is already managed by Cloudflare, this process is seamless and often instant.

- :- **Should I use GitHub Pages or Cloudflare Pages?**

  It depends on your needs!
  - **GitHub Pages** is perfect for simple projects, personal blogs, and documentation sites where ease of use and direct integration with GitHub are priorities.
  - **Cloudflare Pages** is better for sites where performance, security, and scalability are important. Its global CDN, free analytics, and advanced features like redirects and preview deployments make it a more robust, professional-grade solution. For most projects, **Cloudflare Pages is the recommended choice**.

::::
